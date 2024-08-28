1. Clone repository and install all packages
2. In yor WSL2 Linux execute following command: ip addr | grep eth0
3. Open package.json for edit. In the "scripts" section find out 'develop' and 'start' and replace 'gatsby develop' 
   by 'NODE_TLS_REJECT_UNAUTHORIZED=0 gatsby develop -H <IP you found by previous command>. Save.
4. Enter to gatsby directory: cd gatsby
5. Execute command: npm run develop