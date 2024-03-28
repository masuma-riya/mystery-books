export const saveDataToLocalStorage = ({data, listType}) =>{
    const saveData = JSON.parse(localStorage.getItem(listType)) || [];
  saveData.find((item) => item.id == data.id);
        
            saveData.push(data);
            localStorage.setItem(listType, JSON.stringify(saveData));
        
};
