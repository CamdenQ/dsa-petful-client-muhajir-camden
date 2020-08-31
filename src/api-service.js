const API_ENDPOINT = 'http://localhost:8000';

// 'https://cryptic-savannah-59088.herokuapp.com' 'http://localhost:8000'

const ApiService = {
  getPets() {
    return fetch(`${API_ENDPOINT}/pets`).then((res) => res.json());
  },

  getQueue() {
    return fetch(`${API_ENDPOINT}/people`).then((res) => res.json());
  },

  joinQueue(user) {
    return fetch(`${API_ENDPOINT}/people/`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    });
  },

  removeUser() {
    return fetch(`${API_ENDPOINT}/people`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    });
  },

  removePet(pet_type) {
    return fetch(`${API_ENDPOINT}/pets/${pet_type}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    });
  },
};

export default ApiService;
