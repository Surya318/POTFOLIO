#!/usr/bin/env python3
"""
Server for Surya Kesavadasupalem's Portfolio
Serves the production build and automatically opens your browser.
"""

import http.server
import socketserver
import os
import sys
import webbrowser
from pathlib import Path

# Safe encoding for Windows consoles
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

PORT = 5173

BASE_DIR = Path(__file__).resolve().parent
DIST_DIR = BASE_DIR / "dist"

if DIST_DIR.exists():
    os.chdir(DIST_DIR)
    print(f"[OK] Serving production build from: {DIST_DIR}")
else:
    os.chdir(BASE_DIR)
    print(f"[OK] Serving from: {BASE_DIR}")

class PortfolioHTTPHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def run_server():
    global PORT
    for attempt in range(5):
        try:
            with socketserver.TCPServer(("", PORT), PortfolioHTTPHandler) as httpd:
                url = f"http://localhost:{PORT}"
                print("=" * 60)
                print(f" * Surya's Portfolio is LIVE at: {url}")
                print("=" * 60)
                print(" * Opening in your browser...")
                print(" * Press Ctrl + C to stop.")
                print("=" * 60)

                webbrowser.open(url)
                try:
                    httpd.serve_forever()
                except KeyboardInterrupt:
                    print("\n[INFO] Server stopped.")
                    sys.exit(0)
                break
        except OSError as e:
            if attempt < 4:
                print(f"Port {PORT} in use, trying {PORT + 1}...")
                PORT += 1
            else:
                print(f"[ERROR] Could not start server: {e}")
                sys.exit(1)

if __name__ == "__main__":
    run_server()
