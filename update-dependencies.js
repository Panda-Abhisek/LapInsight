const { execSync } = require('child_process');

console.log('Updating React to the latest stable version...');
execSync('npm install react@latest react-dom@latest', { stdio: 'inherit' });

console.log('\nInstalling @heroicons/react...');
execSync('npm install @heroicons/react', { stdio: 'inherit' });

console.log('\nUpdating other dependencies...');
execSync('npm update', { stdio: 'inherit' });

console.log('\nDependencies updated successfully!');