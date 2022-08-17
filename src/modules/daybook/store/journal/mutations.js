// export const myAction = (state) => {

// }

export const setEntries = (state, entries) => {
    state.entries = [ ...state.entries, ...entries];
    state.isLoading = false;

}

export const updateEntry = (state, entry) => { //recibir entrada actualizada payload
    if(!entry) return;
    const indx = state.entries.map(el => el.id).indexOf(entry.id);

    state.entries[indx] = entry;

    // console.log(newEntry);
    // console.log(newEntry);
    // state.entries => arreglo...

    // state.entries = un arreglo...(id)

}

export const addEntry = (state, entry) => {
    if(!entry) return;
    state.entries.unshift(entry)
    // state -> entries -> la nueva entrada debe ser la primera

}