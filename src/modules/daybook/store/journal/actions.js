// export const myAction = async({ commit }) => {

    
    // }
    import journalApi from "@/api/journalApi"

export const loadEntries = async ({ commit }) => {
    const { data } = await journalApi.get("/entries.json");
    const entries = [];
    for (let id of Object.keys(data)) {
        entries.push({
            id,
            ...data[id]
        })
    }
    commit('setEntries', entries);
    console.log(entries);
}

export const updateEntry = async({ commit }) => {
    commit()
}

export const createEntries = async({ commit }) => {
    commit()
}