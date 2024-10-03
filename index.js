// async function fetchMembers() {
//     const steeringCouncil = document.getElementById('steeringCouncil');
//     const loader = document.getElementById('loader');

//     loader.style.display = 'flex';  // Show the loader initially

//     const categories = ["ADMIN","IT", "CSE", "CSE(AI)", "CSE(AIML)", "CS", "ECE", "ME"];
//     const startNumber = 1;
//     const endNumber = 4000;

//     const jsonFiles = [];

//     // Prepare all file paths based on categories and member numbers
//     for (const category of categories) {
//         for (let i = startNumber; i <= endNumber; i++) {
//             jsonFiles.push(`member/member${category}${i}.json`);
//         }
//     }

//     const batchSize = 10;  // Process files in batches of 10
//     const validMembers = [];  // Array to hold valid member data
//     let firstMemberLoaded = false;  // Flag to track if at least one member is loaded

//     const fetchMember = async (file) => {
//         try {
//             const response = await fetch(file);
//             if (response.ok) {
//                 const data = await response.json();
//                 validMembers.push(data);
//                 displayMember(data);  // Display each member as soon as data is available

//                 // Hide the loader as soon as the first valid member is fetched
//                 if (!firstMemberLoaded) {
//                     loader.style.display = 'none';
//                     firstMemberLoaded = true;  // Set flag to true after the first load
//                 }
//             } else {
//                 console.warn(`Unable to fetch ${file}: ${response.status}`);
//             }
//         } catch (error) {
//             console.error(`Error fetching ${file}:`, error);
//         }
//     };

//     // Function to display individual member data
//     const displayMember = (data) => {
//         const memberCard = document.createElement('div');
//         memberCard.className = "cc flex flex-col gap-8 items-center justify-around text-center w-[260px] rounded-lg p-6 shadow-lg";

//         memberCard.innerHTML = `
//             <div>
//                 <div class="box">
//                     <div class="content">
//                         <img class="w-24 h-24 rounded-full mx-auto" src="${data.image}" alt="${data.name}" />
//                     </div>
//                 </div>
//                 <p class="text-xl mt-6 mb-1 font-black text-white">${data.name}</p>
//                 <p class="text-md text-gray-400">${data.description}</p>
//             </div>
//         `;
//         steeringCouncil.appendChild(memberCard);  // Append member card to the DOM
//     };

//     // Function to process files in batches
//     for (let i = 0; i < jsonFiles.length; i += batchSize) {
//         const currentBatch = jsonFiles.slice(i, i + batchSize);
//         const promises = currentBatch.map(fetchMember);
//         await Promise.all(promises);  // Wait for all promises in the current batch to resolve
//     }

//     // If no valid members were fetched, hide the loader and display a message
//     if (!firstMemberLoaded) {
//         loader.style.display = 'none';  // Hide the loader if no members were loaded
//         steeringCouncil.innerHTML = '<p>No members found.</p>';
//     }
// }

// document.addEventListener('DOMContentLoaded', fetchMembers);







// async function fetchMembers() {
//     const steeringCouncil = document.getElementById('steeringCouncil');
//     const loader = document.getElementById('loader');

//     loader.style.display = 'flex';  // Show the loader initially

//     const categories = ["ADMIN", "IT", "CSE", "CSE(AI)", "CSE(AIML)", "CS", "ECE", "ME"];
//     const startNumber = 1;
//     const endNumber = 4000;

//     const jsonFiles = [];

//     // Prepare all file paths based on categories and member numbers
//     for (const category of categories) {
//         for (let i = startNumber; i <= endNumber; i++) {
//             jsonFiles.push(`member/member${category}${i}.json`);
//         }
//     }

//     const batchSize = 10;  // Process files in batches of 10
//     const firstBatchSize = 500;  // First batch of 500 members
//     const validMembers = [];  // Array to hold valid member data
//     let firstBatchLoaded = false;  // Flag to track if the first 500 members are loaded

//     const fetchMember = async (file) => {
//         try {
//             const response = await fetch(file);
//             if (response.ok) {
//                 const data = await response.json();
//                 validMembers.push(data);
//                 displayMember(data);  // Display each member as soon as data is available
//             } else {
//                 console.warn(`Unable to fetch ${file}: ${response.status}`);
//             }
//         } catch (error) {
//             console.error(`Error fetching ${file}:`, error);
//         }
//     };

//     // Function to display individual member data
//     const displayMember = (data) => {
//         const memberCard = document.createElement('div');
//         memberCard.className = "cc flex flex-col gap-8 items-center justify-around text-center w-[260px] rounded-lg p-6 shadow-lg";

//         memberCard.innerHTML = `
//             <div>
//                 <div class="box">
//                     <div class="content">
//                         <img class="w-24 h-24 rounded-full mx-auto" src="${data.image}" alt="${data.name}" />
//                     </div>
//                 </div>
//                 <p class="text-xl mt-6 mb-1 font-black text-white">${data.name}</p>
//                 <p class="text-md text-gray-400">${data.description}</p>
//             </div>
//         `;
//         steeringCouncil.appendChild(memberCard);  // Append member card to the DOM
//     };

//     // Function to fetch the first batch of 500 members
//     const fetchFirstBatch = async () => {
//         const firstBatch = jsonFiles.slice(0, firstBatchSize);  // Get the first 500 files
//         const firstBatchPromises = firstBatch.map(fetchMember);
//         await Promise.all(firstBatchPromises);  // Wait for all first batch promises to resolve
//     };

//     // Function to fetch remaining members in smaller batches (starting from 501)
//     const fetchRemainingBatches = async () => {
//         for (let i = firstBatchSize; i < jsonFiles.length; i += batchSize) {
//             const currentBatch = jsonFiles.slice(i, i + batchSize);
//             const promises = currentBatch.map(fetchMember);
//             await Promise.all(promises);  // Process each batch and wait for it to complete
//         }
//     };

//     // Fetch the first 500 members and hide the loader once done
//     await fetchFirstBatch();
//     loader.style.display = 'none';  // Hide the loader after the first 500 members are loaded

//     // Fetch the remaining members in the background
//     fetchRemainingBatches();
// }

// document.addEventListener('DOMContentLoaded', fetchMembers);





// async function fetchMembers() {
//     const steeringCouncil = document.getElementById('steeringCouncil');
//     const loader = document.getElementById('loader');

//     loader.style.display = 'flex'; // Show the loader initially

//     const categories = ["ADMIN", "IT", "CSE", "CSE(AI)", "CSE(AIML)", "CS", "ECE", "ME"];
//     const startNumber = 1;
//     const endNumber = 4000;

//     const jsonFiles = [];

//     // Prepare all file paths based on categories and member numbers
//     for (const category of categories) {
//         for (let i = startNumber; i <= endNumber; i++) {
//             jsonFiles.push(`member/member${category}${i}.json`);
//         }
//     }

//     const batchSize = 10; // Process the first 10 files immediately
//     const validMembers = []; // Array to hold valid member data
//     let firstBatchLoaded = false; // Flag to check if the first batch is loaded

//     // Function to fetch each JSON file
//     const fetchMember = async (file) => {
//         try {
//             const response = await fetch(file);
//             if (response.ok) {
//                 const data = await response.json();
//                 validMembers.push(data);
//                 displayMember(data); // Display each member as soon as data is available
//             } else {
//                 console.warn(`Unable to fetch ${file}: ${response.status}`);
//             }
//         } catch (error) {
//             console.error(`Error fetching ${file}:`, error);
//         }
//     };

//     // Function to display individual member data
//     const displayMember = (data) => {
//         const memberCard = document.createElement('div');
//         memberCard.className = "cc flex flex-col gap-8 items-center justify-around text-center w-[260px] rounded-lg p-6 shadow-lg";

//         memberCard.innerHTML = `
//             <div>
//                 <div class="box">
//                     <div class="content">
//                         <img class="w-24 h-24 rounded-full mx-auto" src="${data.image}" alt="${data.name}" />
//                     </div>
//                 </div>
//                 <p class="text-xl mt-6 mb-1 font-black text-white">${data.name}</p>
//                 <p class="text-md text-gray-400">${data.description}</p>
//             </div>
//         `;
//         steeringCouncil.appendChild(memberCard); // Append member card to the DOM
//     };

//     // Function to load the first batch and then show the site content
//     const loadInitialBatch = async () => {
//         const initialBatch = jsonFiles.slice(0, batchSize); // Fetch the first 10 files
//         const promises = initialBatch.map(fetchMember);
//         await Promise.all(promises); // Wait for the first 10 files to be fetched

//         // Hide the loader after the first batch has been loaded
//         loader.style.display = 'none';
//         firstBatchLoaded = true; // Set flag to true after the first batch is loaded
//     };

//     // Function to process the remaining files in the background
//     const loadRemainingFiles = async () => {
//         for (let i = batchSize; i < jsonFiles.length; i += batchSize) {
//             const currentBatch = jsonFiles.slice(i, i + batchSize);
//             const promises = currentBatch.map(fetchMember);
//             await Promise.all(promises); // Wait for all promises in the current batch to resolve
//         }
//     };

//     // Start loading the first batch immediately
//     await loadInitialBatch();

//     // Load the remaining files in the background without delaying the site load
//     loadRemainingFiles();
// }

// document.addEventListener('DOMContentLoaded', fetchMembers);











// async function fetchMembers() {
//     const steeringCouncil = document.getElementById('steeringCouncil');
//     const loader = document.getElementById('loader');

//     loader.style.display = 'flex';  // Show the loader initially

//     const categories = ["ADMIN", "IT", "CSE", "CSE(AI)", "CSE(AIML)", "CS", "ECE", "ME"];
//     const startNumber = 1;
//     const endNumber = 4000;
//     const firstBatchCount = 50; // Fetch 50 files before hiding the loader

//     const jsonFiles = [];

//     // Prepare all file paths based on categories and member numbers
//     for (const category of categories) {
//         for (let i = startNumber; i <= endNumber; i++) {
//             jsonFiles.push(`member/member${category}${i}.json`);
//         }
//     }

//     const batchSize = 10; // Process files in batches of 10
//     const validMembers = []; // Array to hold valid member data
//     let firstBatchFetched = false; // Flag to track if the first 50 members have been fetched

//     // Function to display individual member data
//     const displayMember = (data) => {
//         const memberCard = document.createElement('div');
//         memberCard.className = "cc flex flex-col gap-8 items-center justify-around text-center w-[260px] rounded-lg p-6 shadow-lg";

//         memberCard.innerHTML = `
//             <div>
//                 <div class="box">
//                     <div class="content">
//                         <img class="w-24 h-24 rounded-full mx-auto" src="${data.image}" alt="${data.name}" />
//                     </div>
//                 </div>
//                 <p class="text-xl mt-6 mb-1 font-black text-white">${data.name}</p>
//                 <p class="text-md text-gray-400">${data.description}</p>
//             </div>
//         `;
//         steeringCouncil.appendChild(memberCard);  // Append member card to the DOM
//     };

//     const fetchMember = async (file) => {
//         try {
//             const response = await fetch(file);
//             if (response.ok) {
//                 const data = await response.json();
//                 validMembers.push(data);
//                 displayMember(data); // Display each member as soon as data is available
//             } else {
//                 console.warn(`Unable to fetch ${file}: ${response.status}`);
//             }
//         } catch (error) {
//             console.error(`Error fetching ${file}:`, error);
//         }
//     };

//     // Function to process files in batches
//     const processBatches = async (files, batchCount) => {
//         for (let i = 0; i < files.length; i += batchSize) {
//             const currentBatch = files.slice(i, i + batchSize);
//             const promises = currentBatch.map(fetchMember);
//             await Promise.all(promises); // Wait for all promises in the current batch to resolve

//             // If the first 50 files are fetched, hide the loader and show the website
//             if (!firstBatchFetched && validMembers.length >= batchCount) {
//                 loader.style.display = 'none'; // Hide the loader after 50 valid members are fetched
//                 firstBatchFetched = true; // Set the flag to indicate the first batch is done
//             }
//         }
//     };

//     // Fetch the first 50 JSON files before showing the website
//     await processBatches(jsonFiles.slice(0, firstBatchCount), firstBatchCount);

//     // After the first 50, continue fetching the rest in the background without the loader
//     processBatches(jsonFiles.slice(firstBatchCount), jsonFiles.length - firstBatchCount);

//     // If no valid members were fetched after the first batch, hide the loader and display a message
//     if (!firstBatchFetched) {
//         loader.style.display = 'none'; // Hide the loader if no members were loaded
//         steeringCouncil.innerHTML = '<p>No members found.</p>';
//     }
// }

// document.addEventListener('DOMContentLoaded', fetchMembers);








async function fetchMembers() {
    const steeringCouncil = document.getElementById('steeringCouncil');
    const loader = document.getElementById('loader');

    loader.style.display = 'flex';  // Show the loader initially

    const categories = ["ADMIN", "IT", "CSE", "CSE(AI)", "CSE(AIML)", "CS", "ECE", "ME"];
    const startNumber = 1;
    const endNumber = 4000;
    const firstBatchCount = 50; // Fetch 50 files before background loading starts

    const jsonFiles = [];

    // Prepare all file paths based on categories and member numbers
    for (const category of categories) {
        for (let i = startNumber; i <= endNumber; i++) {
            jsonFiles.push(`member/member${category}${i}.json`);
        }
    }

    const batchSize = 10; // Process files in batches of 10
    const validMembers = []; // Array to hold valid member data
    let firstValidFileFetched = false; // Flag to check if at least one valid file is fetched

    // Function to display individual member data
    const displayMember = (data) => {
        const memberCard = document.createElement('div');
        memberCard.className = "cc flex flex-col gap-8 items-center justify-around text-center w-[260px] rounded-lg p-6 shadow-lg";

        memberCard.innerHTML = `
            <div>
                <div class="box">
                    <div class="content">
                        <img class="w-24 h-24 rounded-full mx-auto" src="${data.image}" alt="${data.name}" />
                    </div>
                </div>
                <p class="text-xl mt-6 mb-1 font-black text-white">${data.name}</p>
                <p class="text-md text-gray-400">${data.description}</p>
            </div>
        `;
        steeringCouncil.appendChild(memberCard);  // Append member card to the DOM
    };

    const fetchMember = async (file) => {
        try {
            const response = await fetch(file);
            if (response.ok) {
                const data = await response.json();
                validMembers.push(data);
                displayMember(data); // Display each member as soon as data is available

                // Hide the loader as soon as the first valid file is fetched
                if (!firstValidFileFetched) {
                    loader.style.display = 'none'; // Hide the loader
                    firstValidFileFetched = true; // Set flag to indicate a valid file was fetched
                }
            } else {
                console.warn(`Unable to fetch ${file}: ${response.status}`);
            }
        } catch (error) {
            console.error(`Error fetching ${file}:`, error);
        }
    };

    // Function to process files in batches
    const processBatches = async (files, batchCount) => {
        for (let i = 0; i < files.length; i += batchSize) {
            const currentBatch = files.slice(i, i + batchSize);
            const promises = currentBatch.map(fetchMember);
            await Promise.all(promises); // Wait for all promises in the current batch to resolve

            // If the first valid file is fetched, continue to load the remaining files in the background
            if (firstValidFileFetched && validMembers.length >= batchCount) {
                break; // Break the loop if the first 50 valid files are loaded
            }
        }
    };

    // Fetch the first 50 JSON files before showing the website
    await processBatches(jsonFiles.slice(0, firstBatchCount), firstBatchCount);

    // After the first valid file is fetched, continue fetching the rest in the background
    processBatches(jsonFiles.slice(firstBatchCount), jsonFiles.length - firstBatchCount);

    // If no valid members were fetched, the loader will remain until the first valid file is fetched
}

document.addEventListener('DOMContentLoaded', fetchMembers);
