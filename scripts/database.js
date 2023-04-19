const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],
    villains: [
        {
            id: 1,
            name: "LazerBlazer",
            power: "Laser Beam Eyes"
        },
        {
            id: 2,
            name: "Death Touch",
            power: "Poisonous Skin Oil"
        }
    ]
}
export const getHeroes = () => {
    return database.heroes.map(hero => ({ ...hero }))
}
export const getVillains = () => {
    return database.villains.map(villain => ({ ...villain }))
}