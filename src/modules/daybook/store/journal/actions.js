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

export const updateEntry = async({ commit }, entry) => { //entry debe ser parametro
    try {
        const { date, picture, text} = entry;
        const dataToSave = { date, picture, text};
    
        const resp  = await journalApi.put(`/entries/${entry.id}.json`, dataToSave);
        console.log(resp);
        commit('updateEntry', {...entry})
        
    } catch (error) {
        console.log(error);
    }
    
}

export const createEntries = async({ commit }, entry) => {
    // dataToSave

    const { date, picture, text} = entry;
    let dataToSave = { date, picture, text};

    const { data } = await journalApi.post(`/entries.json`, dataToSave);

        
    dataToSave.id = data.name;
    
    // data = {"name": "-N9dWafE5QKCyR6lu7vW" }
    commit('addEntry', dataToSave)

    // entry.id
    // commit() -> addEntry

    // return data.name
}