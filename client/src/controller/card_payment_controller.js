import axios_instance from "axios";

const deleteCardDetails = async (id) => {
  try {
    await axios_instance.delete("/", { params: { id: id } });
    return "Deleted successfully!!!";
  } catch (ex) {
    return "Error while deleting the details please try again!!!";
  }
}

const editCardDetails = async (data) => {
  const id = data["cardId"];
  try {
    await axios_instance.put("/", data, { params: { id: id } });
    return "Saved successfully!!!";
  } catch (ex) {
    return "Error while saving the details please try again!!!";
  }
}

const addCardDetails = async (data) => {
  try {
    await axios_instance.post("/", data, { params: { id: id } });
    return "Saved successfully!!!";
  } catch (ex) {
    return "Error while saving the details please try again!!!";
  }
}

const getAllCards = async () => {
  try {
    const data = await axios_instance.get("/", data, { params: { id: id } });
    data = data === null ? [] : data;
    return data;
  } catch (ex) {
    return null;
  }
}

export { addCardDetails, deleteCardDetails, editCardDetails, getAllCards };