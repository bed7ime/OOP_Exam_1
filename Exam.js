class Person {
  name = "";
  address = "";
  email = "";
  phone = "";
  accountType = null;
  constructor(name, address, email, phone) {
    this.name = name;
    this.address = address;
    this.email = email;
    this.phone = phone;
    // this.accountType = accountType;
  }

  getName() {
    return this.name;
  }

  getAddress() {
    return this.address;
  }

  getEmail() {
    return this.email;
  }

  getPhone() {
    return this.phone;
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

  getUsername() {
    return this.username;
  }

  getPassword() {
    return this.password;
  }

  getStatus() {
    return this.status;
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
  accountType = "Receptionist";
  constructor(name, address, email, phone, accountType) {
    super(name, address, email, phone, accountType);
  }

  createBooking() {
    return this.roomBookings;
  }

  addRoomBooking(rommBooking) {
    this.roomBookings.push(rommBooking);
  }

  toString() {
    return `${super.toString()}`;
  }
}

class Guest extends Person {
  totalRoomBooking = 0;
  rommBooking = [];
  accountType = "Guest";
  constructor(name, address, email, phone, accountType) {
    super(name, address, email, phone, accountType);
  }

  createBooking() {
    return this.rommBooking;
  }

  addRoomBooking(rommBooking) {
    this.roomBookings.push(rommBooking);
  }

  toString() {
    return `${super.toString()}, Total Bookings: ${this.totalRoomBooking}`;
  }
}

class RoomBooking {
  reservationNumber = "";
  startDate = "";
  durationDays = 0;
  status = "";
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
  style = "";
  status = "";
  roomPrice = 0;
  constructor(roomNumber, style, status, roomPrice) {
    this.roomNumber = roomNumber;
    this.style = style;
    this.status = status;
    this.roomPrice = roomPrice;
  }

  isRoomAvailable() {
    if (this.status == RoomStatus.Available) {
      return true;
    } else {
      return false;
    }
  }

  //   createRoom(roomNumber, style, status, roomPrice) {}
}

class Hotel {
  name = "";
  location = "";
  rooms = [];
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getRooms() {
    let room = "";
    for (let i = 0; i < this.rooms.length; i++) {
      room += this.rooms[i].roomNumber;
      if (i < this.rooms.length - 1) {
        room += ", ";
      }
    }

    return `Rooms[${room}]`;
  }

  addNewRoom(room) {
    this.rooms.push(room);
    return true;
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

class AccountType {
  static Guest = new AccountType("Guest");
  static Receptionist = new AccountType("Receptionist");
  constructor(accountType) {
    this.accountType = accountType;
  }
}

class AccountStatus {
  static Active = new AccountStatus("Active");
  static Banned = new AccountStatus("Banned");
  constructor(accountStatus) {
    this.accountStatus = accountStatus;
  }
}

class RoomStatus {
  static Available = new RoomStatus("Available");
  static Disavailable = new RoomStatus("Disavailable");
  static LateCheckOut = new RoomStatus("LateCheckOut");
  static EarlyCheckIn = new RoomStatus("EarlyCheckIn");
  constructor(roomStatus) {
    this.roomStatus = roomStatus;
  }
}

class BookingStatus {
  static Confirmed = new BookingStatus("Confirmed");
  static Cancel = new BookingStatus("Cancel");
  constructor(bookingStatus) {
    this.bookingStatus = bookingStatus;
  }
}

const main = () => {
  // Create Person
  // Create Account
  const account1 = new Account("Punsan01", "P11111", AccountStatus.Active);
  // Create Receptionist
  const receptionist1 = new Receptionist(
    "Catherine",
    "Catherine house",
    "catherine@gmail.com",
    "222-2222222"
  );

  const receptionist2 = new Receptionist(
    "David",
    "David house",
    "david@gmail.com",
    "333-3333333"
  );

  // Create Guest
  const guest1 = new Guest(
    "Alice",
    "Alice house",
    "alice@gmail.com",
    "000-0000000"
  );

  const guest2 = new Guest(
    "Bob",
    "Bob house",
    "bobhelpmepls@gmail.com",
    "111-1111111"
  );
  // Create RoomBooking
  // Create Room
  const room1 = new Room(
    "C404",
    "Double bed sea view",
    RoomStatus.Available,
    10000.5
  );

  const room2 = new Room(
    "C303",
    "Twin bed sea view",
    RoomStatus.Disavailable,
    9900.5
  );

  const room3 = new Room(
    "C202",
    "Double bed pool view",
    RoomStatus.Available,
    8850.5
  );

  const room4 = new Room(
    "C101",
    "Twin bed pool view",
    RoomStatus.Available,
    7500.5
  );
  // Create Hotel
  const hotel1 = new Hotel("IDK hotel", "SomeWhere");
  hotel1.addNewRoom(room1);
  hotel1.addNewRoom(room2);
  hotel1.addNewRoom(room3);
  hotel1.addNewRoom(room4);

  // Create Notification

  console.log(room2.isRoomAvailable());
};
main();
