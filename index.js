async function fetchMembers() {
    const steeringCouncil = document.getElementById('steeringCouncil');
    const loader = document.getElementById('loader');

    loader.style.display = 'flex';  // Show the loader initially

    const categories = ["ADMIN", "IT", "CSE", "CSE(AI)", "CSE(AIML)", "CS", "ECE", "ME"];
    const batchSize = 500;  // Process files in batches of 500
    const validMembers = [];  // Array to hold valid member data
    let firstMemberLoaded = false;  // Flag to track if at least one member is loaded

    // Prepare file paths based on categories and member numbers in batches
    for (const category of categories) {
        for (let startNumber = 1; startNumber <= 4000; startNumber += batchSize) {
            const endNumber = Math.min(startNumber + batchSize - 1, 4000);
            const jsonFiles = [];

            for (let i = startNumber; i <= endNumber; i++) {
                jsonFiles.push(`member/member${category}${i}.json`);
            }

            const promises = jsonFiles.map(fetchMember);
            await Promise.all(promises);  // Wait for all promises in the current batch to resolve
        }
    }

    // Function to fetch individual member data
    async function fetchMember(file) {
        try {
            const response = await fetch(file);
            if (response.ok) {
                const data = await response.json();
                validMembers.push(data);
                displayMember(data);  // Display each member as soon as data is available

                // Hide the loader as soon as the first valid member is fetched
                if (!firstMemberLoaded) {
                    loader.style.display = 'none';
                    firstMemberLoaded = true;  // Set flag to true after the first load
                }
            } else {
                console.warn(`Unable to fetch ${file}: ${response.status}`);
            }
        } catch (error) {
            console.error(`Error fetching ${file}:`, error);
        }
    }

    // Function to display individual member data
    function displayMember(data) {
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
    }

    // If no valid members were fetched, hide the loader and display a message
    if (!firstMemberLoaded) {
        loader.style.display = 'none';  // Hide the loader if no members were loaded
        steeringCouncil.innerHTML = '<p>No members found.</p>';
    }
}

document.addEventListener('DOMContentLoaded', fetchMembers);
