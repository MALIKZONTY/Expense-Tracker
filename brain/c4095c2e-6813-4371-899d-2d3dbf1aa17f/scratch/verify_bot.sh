#!/bin/bash
# Simulate a bot request to the local frontend server
echo "Simulating bot request to localhost:5173..."
curl -s http://localhost:5173/ | grep -E "Expensico|Privacy Policy|Terms and Conditions"
