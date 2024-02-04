import { api, requestConfig } from "../utils/config";

// Publish an user's photo
const publishPhoto = async (data, token) => {
  const config = requestConfig("POST", data, token, true);

  try {
    const res = await fetch(api + "/photos", config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

// Get user photos
const getUserPhotos = async (id) => {
  const config = requestConfig("GET");

  try {
    const res = await fetch(api + "/photos/user/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

// Delete a photo
const deletePhoto = async (id, token) => {
  const config = requestConfig("DELETE", "", token);

  try {
    const res = await fetch(api + "/photos/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

// Update a photo
const updatePhoto = async (data, id, token) => {
  const config = requestConfig("PUT", data, token);

  try {
    const res = await fetch(api + "/photos/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

// Get photo by id
const getPhoto = async (id, token) => {
  const config = requestConfig("GET", null, token);

  try {
    const res = await fetch(api + "/photos/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

// Like a photo
const like = async (id, token) => {

  const config = requestConfig("PUT", null, token)

  try {

    const res = await fetch(api + "/photos/like/" + id, config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

// Add coment to a photo
const comment = async (data, id, token) => {
  const config = requestConfig("PUT", data, token)

  try {
    const res = await fetch(api + "/photos/comment/" + id, config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

// Get all photo
const getPhotos = async (token) => {

  const config = requestConfig("GET", null, token)

  try {
    const res = await fetch(api + "/photos/", config)
      .then((res) => res.json())
      .catch((err) => err)

      return res
  } catch (error) {
    console.log(error)
  }
}

//Search photo by title
const searchPhotos = async (query, token) => {

  const config = requestConfig("GET", null, token)

  try {

    const res = await fetch(api + "/photos/search?q=" + query, config)
    .then((res) => res.json())
    .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}


const photoService = {
  publishPhoto,
  getUserPhotos,
  deletePhoto,
  updatePhoto,
  getPhoto,
  like,
  comment,
  getPhotos, 
  searchPhotos,
};

export default photoService;