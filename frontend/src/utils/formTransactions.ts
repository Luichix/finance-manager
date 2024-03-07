export const initialState = {
  isOpen: false,
  isLoged: false,
  ammount: "",
  category: "1",
  description: "",
  createdAt: "",
  selectedTab: "INCOME",
};

export const labelsList = {
  amount: "Cantidad:",
  category: "Categoria:",
  description: "Descripción:",
  date: "Fecha:",
};
export function submitTransaction(
  token,
  { ammount, description, category, selectedTab, createdAt },
) {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Access-Control-Allow-Origin", "");
  headers.append("Authorization", `Bearer ${token}`);
  const raw = JSON.stringify({
    amount: ammount,
    description: description,
    offset: "0",
    categoryId: category,
    type: selectedTab,
    createdAt: createdAt,
  });
  const requestOptions = {
    method: "POST",
    headers: headers,
    body: raw,
    redirect: "follow",
  };
  console.log(token);
  fetch(
    `https://backend-finance-managegr.onrender.com/api/v1/expenses${!token ? "?demo=true" : ""}`,
    requestOptions,
  );
}
