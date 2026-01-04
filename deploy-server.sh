#!/bin/bash
# aaPanel Deployment Script for Trivasia
# Run this script on your server after uploading files

echo "=========================================="
echo "Trivasia Next.js Deployment Script"
echo "=========================================="

# Navigate to project directory
cd /www/wwwroot/trivasia

# Install dependencies
echo "Installing dependencies..."
npm install --production

# Set proper permissions
echo "Setting permissions..."
chown -R www:www /www/wwwroot/trivasia
chmod -R 755 /www/wwwroot/trivasia

# Start with PM2
echo "Starting application with PM2..."
pm2 start start.js --name trivasia

# Save PM2 process list
echo "Saving PM2 configuration..."
pm2 save

# Setup PM2 auto-start on server reboot
echo "Setting up PM2 auto-start..."
pm2 startup

echo "=========================================="
echo "Deployment Complete!"
echo "Check status with: pm2 status"
echo "View logs with: pm2 logs trivasia"
echo "=========================================="
