const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// Middleware to serve static files
app.use(express.static(path.join(__dirname)));  // Serve static files from the root

// Serve the index.html file
app.get('/', function(req, res) {
    console.log('Serving index.html');
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Endpoint to get the list of members
app.get('/members', (req, res) => {
    const dirPath = path.join(__dirname, 'collections');
    console.log(`Reading directory: ${dirPath}`);

    fs.readdir(dirPath, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return res.status(500).send('Unable to scan directory: ' + err);
        }

        const jsonFiles = files.filter(file => path.extname(file) === '.json');
        console.log('JSON files found:', jsonFiles);

        const membersData = [];

        jsonFiles.forEach(file => {
            const memberPath = path.join(dirPath, file);
            console.log(`Reading file: ${memberPath}`);

            try {
                const memberData = JSON.parse(fs.readFileSync(memberPath, 'utf8'));
                membersData.push(memberData);
                console.log('Member data:', memberData);
            } catch (parseError) {
                console.error(`Error parsing JSON from ${file}:`, parseError);
            }
        });

        console.log('Final members data to send:', membersData);
        res.json(membersData);
    });
});

// Start the server
app.listen(port, () => {
    console.log('Server started at http://localhost:' + port);
});
