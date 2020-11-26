import * as FileSystem from 'expo-file-system';

const dir = FileSystem.documentDirectory;

export async function loadData() {
    const fl = await FileSystem.getInfoAsync(dir + 'data.json');
    if(!fl.exists) {
        await saveData({});
    }
    return await FileSystem.readAsStringAsync(dir + 'data.json');
}

export async function saveData(data) {
    await FileSystem.writeAsStringAsync(dir + 'data.json', JSON.stringify(data));
}