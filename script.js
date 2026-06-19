function showMessage() {
  alert("Welcome to Shadow Strike! This is a frontend demo website.");
}
function changeZone(zone){
    let image = document.getElementById("zone-img");
    let desc = document.getElementById("zone-desc");

    if(zone === "neon"){
        image.src = "assets/photos/k.jpg";
        desc.innerText = "Neon City is a glowing futuristic map with high-speed fights and bright cyber streets.";
    }

    if(zone === "ice"){
        image.src = "assets/photos/cold.jpg";
        desc.innerText = "Ice Lab is a frozen research base filled with tight corners, cold halls, and surprise attacks.";
    }

    if(zone === "crimson"){
        image.src = "assets/photos/p.jpg";
        desc.innerText = "Crimson Base is a dangerous military zone made for tactical planning and intense team fights.";
    }
}
function showAgent(agent){

    let image = document.getElementById("agentImage");
    let name = document.getElementById("agentName");
    let role = document.getElementById("agentRole");
    let desc = document.getElementById("agentDesc");
    image.classList.remove("rotate-agent");

    void image.offsetWidth;

    if(agent === "nova"){
        image.src = "assets/photos/kiro.jpg";
        name.innerText = "NOVA";
        role.innerText = "Support Specialist";
        desc.innerText = "Creates energy shields and protects the squad during heavy fights.";
    }

    if(agent === "blaze"){
        image.src = "assets/photos/p.jpg";
        name.innerText = "BLAZE";
        role.innerText = "Fire Duelist";
        desc.innerText = "Uses explosive fire attacks to break enemy defenses quickly.";
    }

    if(agent === "ghost"){
        image.src = "assets/photos/holo.jpg";
        name.innerText = "GHOST";
        role.innerText = "Stealth Infiltrator";
        desc.innerText = "Moves silently, scans enemies, and attacks from hidden angles.";
    }

    if(agent === "viper"){
        image.src = "assets/photos/agents.jpg";
        name.innerText = "VIPER";
        role.innerText = "Toxic Controller";
        desc.innerText = "Controls space with toxic gas, traps, and area denial abilities.";
    }

    image.classList.add("rotate-agent");
}

function changeMap(map){
    let image = document.getElementById("mapImage");
    let name = document.getElementById("mapName");
    let difficulty = document.getElementById("mapDifficulty");
    let desc = document.getElementById("mapDesc");

    if(map === "neon"){
        image.src = "assets/photos/map1.jpg";
        name.innerText = "NEON CITY";
        difficulty.innerText = "Difficulty: Medium";
        desc.innerText = "Neon City is a futuristic urban battlefield filled with glowing streets, vertical combat, and fast-paced engagements.";
    }

    if(map === "ice"){
        image.src = "assets/photos/map2.jpg";
        name.innerText = "ICE LAB";
        difficulty.innerText = "Difficulty: Hard";
        desc.innerText = "Ice Lab is a frozen research facility with narrow paths, cold tunnels, and surprise attack points.";
    }

    if(map === "crimson"){
        image.src = "assets/map3.jpg";
        name.innerText = "CRIMSON BASE";
        difficulty.innerText = "Difficulty: Expert";
        desc.innerText = "Crimson Base is a high-security military zone built for tactical planning and intense team battles.";
    }
}