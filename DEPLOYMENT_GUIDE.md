# aaPanel Deployment Guide for Trivasia Next.js App

## Prerequisites on aaPanel Server
1. **Node.js Manager** installed (Install from aaPanel > App Store)
2. **PM2 Manager** installed (Install from aaPanel > App Store)
3. **Nginx** installed (usually pre-installed)

## Files to Upload
Upload these files/folders to your server (e.g., `/www/wwwroot/trivasia`):
- `.next/` (entire folder from build)
- `public/` (entire folder)
- `node_modules/` (entire folder) OR run `npm install` on server
- `package.json`
- `package-lock.json`
- `next.config.mjs`
- All other project files EXCEPT:
  - `.git/` (don't upload)
  - `node_modules/` (if you'll run npm install on server)

## Deployment Steps

### 1. Connect to Server
- Use aaPanel File Manager OR
- Use SFTP (FileZilla, WinSCP)
- Server details: Get from your hosting provider

### 2. Upload Files via aaPanel
1. Login to aaPanel (usually `http://your-server-ip:7800`)
2. Go to **Files** menu
3. Navigate to `/www/wwwroot/`
4. Create new folder: `trivasia`
5. Upload all project files to `/www/wwwroot/trivasia/`

### 3. Install Dependencies (if not uploaded)
SSH into server or use aaPanel Terminal:
```bash
cd /www/wwwroot/trivasia
npm install --production
```

### 4. Set Up Node.js Application in aaPanel

1. Go to **Website** menu
2. Click **Node Project**
3. Click **Add Project**
4. Fill in details:
   - **Project Name:** Trivasia
   - **Project Path:** /www/wwwroot/trivasia
   - **Startup File:** node_modules/next/dist/bin/next (or create start script)
   - **Port:** 3000 (or any available port)
   - **Execution Method:** PM2
   - **Node Version:** Select Node.js 18.x or higher

### 5. Create Start Script (Recommended)
Create `start.js` in project root:
```javascript
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = false
const hostname = 'localhost'
const port = 3000

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://${hostname}:${port}`)
  })
})
```

Then use `start.js` as startup file instead.

### 6. Configure Domain & Nginx Proxy

1. In aaPanel, go to **Website**
2. Click **Add Site**
3. Fill in:
   - **Domain:** your-domain.com
   - **Document Root:** /www/wwwroot/trivasia
   - **PHP Version:** Pure Static (or select PHP if needed)
   - Enable **SSL** if you have certificate

4. Configure Reverse Proxy:
   - Click your site → **Site Settings**
   - Go to **Reverse Proxy** tab
   - Add proxy:
     - **Proxy Name:** Next.js App
     - **Target URL:** http://127.0.0.1:3000
     - **Advanced:** Enable WebSocket support
   
5. Or manually edit Nginx config:
```nginx
location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}
```

### 7. Start Application
In Node Project section:
- Click **Start** button for your project
- Check **Status** - should show "Running"
- View **Logs** if any errors occur

### 8. Configure PM2 Auto-Start
```bash
pm2 startup
pm2 save
```

## Environment Variables
If you need environment variables:
1. Create `.env.production` file in project root
2. Add your variables:
```
NEXT_PUBLIC_API_URL=https://api.trivasia.com
```
3. Restart the application

## Testing
1. Visit `http://your-server-ip:3000` - should work
2. Visit `http://your-domain.com` - should work through nginx proxy

## Troubleshooting

### Port already in use:
```bash
lsof -i :3000
kill -9 <PID>
```

### Permission issues:
```bash
chown -R www:www /www/wwwroot/trivasia
chmod -R 755 /www/wwwroot/trivasia
```

### Application won't start:
- Check PM2 logs: `pm2 logs trivasia`
- Check Node.js version: `node -v` (should be 18+)
- Verify all dependencies installed: `npm list`

### Nginx 502 Bad Gateway:
- Ensure Next.js app is running: `pm2 status`
- Check if port 3000 is accessible: `curl http://localhost:3000`
- Restart Nginx: `systemctl restart nginx`

## Quick Commands

```bash
# Check PM2 status
pm2 status

# View logs
pm2 logs trivasia

# Restart app
pm2 restart trivasia

# Stop app
pm2 stop trivasia

# Check running processes
pm2 list

# Monitor
pm2 monit
```

## Updates/Redeployment
1. Build locally: `npm run build`
2. Upload new `.next/` folder
3. Restart PM2: `pm2 restart trivasia`

## Important Notes
- Next.js requires Node.js 18.17 or later
- Ensure sufficient server resources (RAM: 512MB minimum, 1GB+ recommended)
- Enable gzip compression in Nginx for better performance
- Consider using a CDN for static assets
- Set up proper firewall rules (allow ports 80, 443, SSH)
