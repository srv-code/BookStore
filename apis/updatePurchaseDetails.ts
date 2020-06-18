export interface PurchaseDetails {
  inCartBookIds: number[];
  purchasedBookIds: number[];
}

// internal members
// initial state
let purchaseDetails: PurchaseDetails = {
  inCartBookIds: [],
  purchasedBookIds: [],
};

// external members
// dummy implementaion
export function addBookToCart(bookId: number): boolean {
  const idx = purchaseDetails.inCartBookIds.indexOf(bookId);
  if(idx != -1) 
    return false;
  purchaseDetails.inCartBookIds.push(bookId);
  return true;
}

// dummy implementaion
export function removeBookFromCart(bookId: number): void {
  purchaseDetails.inCartBookIds = purchaseDetails.inCartBookIds.filter(
    id => id != bookId
  );
}

export function getInCartBookIds(): number[] {
  return purchaseDetails.inCartBookIds;
}
