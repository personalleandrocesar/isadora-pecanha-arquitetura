export default defineEventHandler((event) => {
    return {
        "nome": "Casa 101",
        "capa": "https://isadorapecanha.com/casa101/capa.png",
        "description": `
        Casa 101 - Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Sint inventore eum ipsam 
        nostrum et quisquam fugiat id aliquam optio, 
        quas quia? Et quas omnis tempora aliquid nobis, 
        doloremque optio ipsum.`,
        "comodos" : ["Sala", "Cozinha", "Suite"],
        "sala": {
            1: "https://isadorapecanha.com/casa101/1.png",
            2: "https://isadorapecanha.com/casa101/2.png",
            5: "https://isadorapecanha.com/casa101/5.png",
            
        },
        "cozinha": {
            3: "https://isadorapecanha.com/casa101/3.png",
            4: "https://isadorapecanha.com/casa101/4.png",
        },
        "suite": {
            7: "https://isadorapecanha.com/casa101/7.png",
        }
    }
})
