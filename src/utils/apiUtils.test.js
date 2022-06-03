const localForage = require("localForage");
const { getUsers } = require("./apiUtils");

jest.mock("localForage");

const MOCK_RESPONSE = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
];

describe("api utils", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  afterEach(() => {
    localForage.clear();
  });

  it("returns list of users", async () => {
    let response = {};
    const onAPIResponse = (data) => {
      response = data;
    };
    const onError = jest.fn();

    fetch.mockResponse(JSON.stringify(MOCK_RESPONSE));
    getUsers(onAPIResponse, onError);
    // Wait for promise to resolve
    await new Promise((r) => setTimeout(r, 1));
    expect(response.length).toBe(MOCK_RESPONSE.length);
  });
});
