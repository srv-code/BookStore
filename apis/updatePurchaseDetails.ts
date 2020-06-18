export interface PurchaseDetails {
  bookIds: number[];
}

// initial state
let purchaseDetails: PurchaseDetails = {
  bookIds: [],
};

// dummy implementaion
export function addToCart(bookId: number): void {
  purchaseDetails.bookIds.push(bookId);
}

// dummy implementaion
export function removeFromCart(bookId: number): void {
  purchaseDetails.bookIds = purchaseDetails.bookIds.filter(id => id != bookId);
}
