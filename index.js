async function fetchMembers() {
    const steeringCouncil = document.getElementById('steeringCouncil');
    const loader = document.getElementById('loader');

    loader.style.display = 'flex';  // Show the loader

    const categories = ["IT", "CSE", "CSE(AI)", "CSE(AIML)", "CS", "ECE", "ME"];
    const startNumber = 1000;
    const endNumber = 1400;

    const jsonFiles = [];

    // Prepare all file paths based on categories and member numbers
    for (const category of categories) {
        for (let i = startNumber; i <= endNumber; i++) {
            jsonFiles.push(`member/member${category}${i}.json`);
        }
    }

    const batchSize = 10;  // Process files in batches of 10 to optimize performance
    const validMembers = [];  // Array to hold valid member data

    const fetchMember = async (file) => {
        try {
            const response = await fetch(file);
            if (response.ok) {
                const data = await response.json();
                validMembers.push(data);  // Push valid data into the array
                displayMember(data);  // Display each member as soon as data is available
            } else {
                console.warn(`Unable to fetch ${file}: ${response.status}`);
            }
        } catch (error) {
            console.error(`Error fetching ${file}:`, error);
        }
    };

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

    // Function to process files in batches
    for (let i = 0; i < jsonFiles.length; i += batchSize) {
        const currentBatch = jsonFiles.slice(i, i + batchSize);
        const promises = currentBatch.map(fetchMember);
        await Promise.all(promises);  // Wait for all promises in the current batch to resolve

        // You could add a small delay to improve perceived performance if needed
        // await new Promise(resolve => setTimeout(resolve, 200));  // Optional: Add delay between batches
    }

    loader.style.display = 'none';  // Hide the loader after fetching all members

    // Handle case where no valid members were fetched
    if (validMembers.length === 0) {
        steeringCouncil.innerHTML = '<p>No members found.</p>';
    }
}

document.addEventListener('DOMContentLoaded', fetchMembers);
