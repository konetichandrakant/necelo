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
    await axios_instance.post("/", data);
    return "Saved successfully!!!";
  } catch (ex) {
    return "Error while saving the details please try again!!!";
  }
}

const getAllCardDetails = async () => {

  const dueDateChecker = (date) => {

  }

  try {
    let toBePaidList = [], paidList = [];
    const data = (await axios_instance.get("/")).data;
    for (let d in data) {
      if (d["cardAmount"] === 0) {
        d["color"] = "green";
        toBePaidList.push(d);
      } else {
        if (dueDateChecker(d["cardDueDate"])) {
          d["color"] = "white";
          paidList.push(d);
        } else {
          d["color"] = "red";
          paidList.push(d);
        }
      }
    }
    return [toBePaidList, paidList];
  } catch (ex) {
    return null;
  }
}

export { addCardDetails, deleteCardDetails, editCardDetails, getAllCardDetails };