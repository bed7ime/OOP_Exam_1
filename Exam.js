class Person {
  name = "";
  address = "";
  email = "";
  phone = "";
  accountType = null;
  constructor(name, address, email, phone, accountType) {
    this.name = name;
    this.address = address;
    this.email = email;
    this.phone = phone;
    this.accountType = accountType;
  }

  setAddress(address) {
    this.address = address;
  }

  setEmail(email) {
    this.email = email;
  }

  setPhone(phone) {
    this.phone = phone;
  }

  setAccountType(accountType) {
    this.accountType = accountType;
  }

  // Method ด้านบนมีไม่มีก็ได้

  toString() {
    return `Person:[Name: ${this.name}, Address: ${this.address}, Email: ${this.email}, Telephone: ${this.phone}, Account Type: ${this.accountType}]`;
  }
}

class Account {
  username = "";
  password = "";
  status = null;
  constructor(username, password, status) {
    this.username = username;
    this.password = password;
    this.status = status;
  }

  login(username, password) {
    if (username == this.username && password == this.password) {
      return true;
    } else {
      return false;
    }
  }

  resetPassword(username, newPassword) {
    if (username == this.username) {
      this.password = newPassword;
      return true;
    } else {
      return false;
    }
  }
}

class Receptionist extends Person {
  roomBookings = [];
  accountType = AccountType.RECEPTIONIST;
  constructor(name, address, email, phone, accountType) {
    super(name, address, email, phone, accountType);
  }

  createBooking() {
    return this.roomBookings;
  }

  addRoomBooking(roomBooking) {
    this.roomBookings.push(roomBooking);
  }

  toString() {
    return `${super.toString()}`;
  }
}

class Guest extends Person {
  totalRoomBooking = 0;
  roomBookings = [];
  accountType = AccountType.GUEST;
  constructor(name, address, email, phone, accountType) {
    super(name, address, email, phone, accountType);
  }

  createBooking() {
    return this.rommBooking;
  }

  addRoomBooking(rommBooking) {
    this.roomBookings.push(rommBooking);
  }

  setTotalRoomBooking() {
    this.totalRoomBooking = this.roomBookings.length;
  }

  toString() {
    return `${super.toString()}, Total Bookings: ${this.totalRoomBooking}`;
  }
}

class RoomBooking {
  reservationNumber = "";
  startDate = "";
  durationDays = 0;
  status = null;
  createBy = "";
  constructor(reservationNumber, startDate, durationDays, status, createBy) {
    this.reservationNumber = reservationNumber;
    this.startDate = startDate;
    this.durationDays = durationDays;
    this.status = status;
    this.createBy = createBy;
  }
}

class Room {
  roomNumber = "";
  style = null;
  status = null;
  roomPrice = 0;
  constructor(roomNumber, style, status, roomPrice) {
    this.roomNumber = roomNumber;
    this.style = style;
    this.status = status;
    this.roomPrice = roomPrice;
  }

  isRoomAvailable(roomNumber) {
    if (roomNumber == this.roomNumber) {
      if (this.status == RoomStatus.AVAILABLE) {
        return true;
      } else {
        return false;
      }
    } else {
      return "No room";
    }
  }

  //   createRoom(roomNumber, style, status, roomPrice) {}

  toString() {
    return `Room:[${this.roomNumber}, ${this.style}, ${this.roomPrice} Baht, ${this.status}!]`;
  }
}

class Hotel {
  name = "";
  location = "";
  rooms = [];
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  addNewRoom(room) {
    this.rooms.push(room);
    return true;
  }

  toString() {
    let printRoom = "";
    for (let i = 0; i < this.rooms.length; i++) {
      printRoom += "\t" + this.rooms[i] + "\n";
    }
    return `Hotel: [${this.name}` + "\n" + `${printRoom}` + "]";
  }
}

class Notification {
  notificationId = 0;
  createOn = "";
  content = "";
  sender = "";
  recipient = "";
  constructor(notificationId, createOn, content, sender, recipient) {
    this.notificationId = notificationId;
    this.createOn = createOn;
    this.content = content;
    this.sender = sender;
    this.recipient = recipient;
  }
}

// Enum Class ถ้าไม่ได้มีหลาย Constructor สามารถ = ค่าข้อมูลได้เลย
class AccountType {
  static GUEST = "Guest";
  static RECEPTIONIST = "Receptionist";
  constructor(accountType) {
    this.accountType = accountType;
  }
}

class AccountStatus {
  static ACTIVE = "Active";
  static BANNED = "Banned";
  constructor(accountStatus) {
    this.accountStatus = accountStatus;
  }
}

class RoomStatus {
  static AVAILABLE = "Available";
  static DISAVAILABLE = "Disavailable";
  static LATECHECKOUT = "LateCheckOut";
  static EARLYCHECKIN = "EarlyCheckIn";
  constructor(roomStatus) {
    this.roomStatus = roomStatus;
  }
}

class BookingStatus {
  static CONFIRMED = "Confirmed";
  static CANCEL = "Cancel";
  constructor(bookingStatus) {
    this.bookingStatus = bookingStatus;
  }
}

class RoomStyle {
  static DOUBLE_POOL = "Double bed pool view";
  static TWIN_POOL = "Twin bed pool view";
  static DOUBLE_SEA = "Double bed sea view";
  static TWIN_SEA = "Twin bed sea view";
  constructor(style) {
    this.style = style;
  }
}

const main = () => {
  // Create Person
  // Create Account
  const account1 = new Account("Punsan01", "P11111", AccountStatus.ACTIVE);
  // Create Receptionist
  const catherine = new Receptionist(
    "Catherine",
    "Catherine house",
    "catherine@gmail.com",
    "222-2222222"
  );

  const david = new Receptionist(
    "David",
    "David house",
    "david@gmail.com",
    "333-3333333"
  );

  // Create Guest
  const alice = new Guest(
    "Alice",
    "Alice house",
    "alice@gmail.com",
    "000-0000000"
  );

  const bob = new Guest(
    "Bob",
    "Bob house",
    "bobhelpmepls@gmail.com",
    "111-1111111"
  );

  // Create RoomBooking
  const roomBooking1 = new RoomBooking(
    "B01",
    "2024/03/11",
    "10",
    BookingStatus.CONFIRMED,
    catherine
  );

  // Create Room
  const room1 = new Room(
    "C404",
    RoomStyle.DOUBLE_SEA,
    RoomStatus.AVAILABLE,
    10000.5
  );

  const room2 = new Room(
    "C303",
    RoomStyle.TWIN_SEA,
    RoomStatus.DISAVAILABLE,
    9900.5
  );

  const room3 = new Room(
    "C202",
    RoomStyle.DOUBLE_POOL,
    RoomStatus.LATECHECKOUT,
    8850.5
  );

  const room4 = new Room(
    "C101",
    RoomStyle.TWIN_POOL,
    RoomStatus.EARLYCHECKIN,
    7500.5
  );
  // Create Hotel
  const hotel1 = new Hotel("IDK hotel", "SomeWhere");
  hotel1.addNewRoom(room1);
  hotel1.addNewRoom(room2);
  hotel1.addNewRoom(room3);
  hotel1.addNewRoom(room4);

  // Create Notification

  // Add Room Booking
  bob.addRoomBooking(roomBooking1);
  bob.setTotalRoomBooking();

  catherine.addRoomBooking(roomBooking1);

  console.log(room1.isRoomAvailable("C404"));
  // console.log(account1);
};
main();
