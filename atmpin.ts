// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

class Kata {
  static validatePin(pin: string): boolean {
    const regex = /^[0-9]+$/;
    
    if (pin.length === 4 || pin.length === 6) {
      if (!isNaN(Number(pin))) {
        if (regex.test(pin)) {
          
          return true;
        }
      }
    }
    
  return false;
  }
}