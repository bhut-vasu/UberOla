import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import Thar from "../images/cars-big/Thar.png";
import Nexon from "../images/cars-big/Nexon.png";
import Breeza from "../images/cars-big/Breeza.png";
import Creta from "../images/cars-big/Creta.png";
import Benz from "../images/cars-big/Benz.png";
import Swift from "../images/cars-big/Swift.png";
import { IconCar, IconInfoCircleFilled, IconX } from "@tabler/icons-react";
import { IconMapPinFilled } from "@tabler/icons-react";
import { IconCalendarEvent } from "@tabler/icons-react";

function BookCar() {
  const [modal, setModal] = useState(false); //  class - active-modal

  // booking car
  const [carType, setCarType] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [dropTime, setDropTime] = useState("");
  const [carImg, setCarImg] = useState("");

  // modal infos
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");

  // taking value of modal inputs
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleZip = (e) => {
    setZipCode(e.target.value);
  };

  // open modal when all inputs are fulfilled
  const openModal = (e) => {
    e.preventDefault();
    const errorMsg = document.querySelector(".error-message");
    if (
      pickUp === "" ||
      dropOff === "" ||
      pickTime === "" ||
      dropTime === "" ||
      carType === ""
    ) {
      errorMsg.style.display = "flex";
    } else {
      setModal(!modal);
      const modalDiv = document.querySelector(".booking-modal");
      modalDiv.scroll(0, 0);
      errorMsg.style.display = "none";
    }
  };

  // disable page scroll when modal is displayed
  useEffect(() => {
    if (modal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  // confirm modal booking
  const confirmBooking = async (e) => {
    e.preventDefault();
    setModal(!modal);

    const values = {
      name: name,
      lastName: lastName,
      phone: phone,
      age: age,
      email: email,
      address: address,
      city: city,
      zipcode: zipcode,
      carType: carType,
      pickTime: pickTime,
      dropOff: dropOff,
      dropTime: dropTime,
      pickUp: pickUp,
    };
    // if (!values.name.trim() || !values.email.trim() || !values.lastName.trim() ||
    // !values.phone.trim() || !values.age.trim() || !values.address.trim() ||
    // !values.city.trim() || !values.zipcode.trim() || !values.carType.trim() ||
    // !values.pickTime.trim() || !values.dropTime.trim() || !values.pickUp.trim() ||
    // !values.dropOff.trim()) {
    //   toast.warning("Empty Fields!");
    //   return false;
    // }

    await fetch("https://uber-ola-server.vercel.app/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((user) => {
        setName("");
        setEmail("");
        setLastName("");
        setPhone("");
        setAge("");
        setAddress("");
        setCity("");
        setZipCode("");
        setCarType("");
        setPickTime("");
        setDropTime("");
        setPickUp("");
        setDropOff("");
        toast.success("Your bookings are iniated 🤞✌️");
      })
      .catch((err) => {
        setName("");
        setEmail("");
        setLastName("");
        setPhone("");
        setAge("");
        setAddress("");
        setCity("");
        setZipCode("");
        setCarType("");
        setPickTime("");
        setDropTime("");
        setPickUp("");
        setDropOff("");
        toast.error(err.remarks);
        toast.error("Seems, there is an issue with the Server.");
      });
  };

  // taking value of booking inputs
  const handleCar = (e) => {
    setCarType(e.target.value);
    setCarImg(e.target.value);
  };

  const handlePick = (e) => {
    setPickUp(e.target.value);
  };

  const handleDrop = (e) => {
    setDropOff(e.target.value);
  };

  const handlePickTime = (e) => {
    setPickTime(e.target.value);
  };

  const handleDropTime = (e) => {
    setDropTime(e.target.value);
  };

  // based on value name show car img
  let imgUrl;
  switch (carImg) {
    case "Mahindra Thar":
      imgUrl = Thar;
      break;
    case "Tata Nexon":
      imgUrl = Nexon;
      break;
    case "MS Vitara Breeza":
      imgUrl = Breeza;
      break;
    case "Hundai Creta":
      imgUrl = Creta;
      break;
    case "Mercedes-Benz GLK":
      imgUrl = Benz;
      break;
    case "MS Swift":
      imgUrl = Swift;
      break;
    default:
      imgUrl = "";
  }

  // hide message
  const hideMessage = () => {
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "none";
  };

  return (
    <>
      <div style={{ fontSize: "14px", fontWeight: "normal" }}>
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
      <section id="booking-section" className="book-section">
        {/* overlay */}
        <div
          onClick={openModal}
          className={`modal-overlay ${modal ? "active-modal" : ""}`}
        ></div>

        <div className="container">
          <div className="book-content">
            <div className="book-content__box">
              <h2>Book a car</h2>

              <p className="error-message">
                All fields required! <IconX width={20} height={20} />
              </p>

              {/* <p className="booking-done">
                Check your email to confirm an order.{" "}
                <IconX width={20} height={20} onClick={hideMessage} />
              </p> */}

              <form className="box-form">
                <div className="box-form__car-type">
                  <label>
                    <IconCar className="input-icon" /> &nbsp; Select Your Car
                    <b>*</b>
                  </label>
                  <select
                    value={carType}
                    onChange={handleCar}
                    style={{
                      border: "1px solid #b6b6b6",
                      borderRadius: "6px",
                      backgroundColor: "white",
                      width: "100%",
                    }}
                  >
                    <option>Select your car type</option>
                    <option value="Mahindra Thar">Mahindra Thar</option>
                    <option value="Tata Nexon">Tata Nexon</option>
                    <option value="MS Vitara Breeza">MS Vitara Breeza</option>
                    <option value="Hundai Creta">Hundai Creta</option>
                    <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                    <option value="MS Swift">MS Swift</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <IconMapPinFilled className="input-icon" /> &nbsp; Pick-up
                    Zone <b>*</b>
                  </label>
                  <select
                    value={pickUp}
                    onChange={handlePick}
                    style={{
                      border: "1px solid #b6b6b6",
                      borderRadius: "6px",
                      backgroundColor: "white",
                      width: "100%",
                    }}
                  >
                    <option>Select nearest pick up location</option>
                    <option>
                      Sardar Vallabhbhai Patel International Airport
                    </option>
                    <option>Kalupur Railway Station</option>
                    <option>Maninagar Bus Station</option>
                    <option>GIFT City Gate</option>
                    <option>Iscon Center</option>
                    <option>Nehru Nagar Circle</option>
                    <option>Kankaria Lake</option>
                    <option>Riverfront Flower Park</option>
                    <option>SP Ring Road</option>
                    <option>GandhiNagar Bus Stand</option>
                    <option>Taj Hotel</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <IconMapPinFilled className="input-icon" /> &nbsp; Drop-off
                    Zone <b>*</b>
                  </label>
                  <select
                    value={dropOff}
                    onChange={handleDrop}
                    style={{
                      border: "1px solid #b6b6b6",
                      borderRadius: "6px",
                      backgroundColor: "white",
                      width: "100%",
                    }}
                  >
                    <option>Select nearest drop off location</option>
                    <option>
                      Sardar Vallabhbhai Patel International Airport
                    </option>
                    <option>Kalupur Railway Station</option>
                    <option>Maninagar Bus Station</option>
                    <option>GIFT City Gate</option>
                    <option>Iscon Center</option>
                    <option>Nehru Nagar Circle</option>
                    <option>Kankaria Lake</option>
                    <option>Riverfront Flower Park</option>
                    <option>SP Ring Road</option>
                    <option>GandhiNagar Bus Stand</option>
                    <option>Taj Hotel</option>
                  </select>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="picktime">
                    <IconCalendarEvent className="input-icon" /> &nbsp; Pick-up
                    Date <b>*</b>
                  </label>
                  <input
                    id="picktime"
                    value={pickTime}
                    onChange={handlePickTime}
                    type="date"
                    style={{
                      border: "1px solid #b6b6b6",
                      borderRadius: "6px",
                      backgroundColor: "white",
                      width: "100%",
                    }}
                  ></input>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="droptime">
                    <IconCalendarEvent className="input-icon" /> &nbsp; Drop-off
                    date <b>*</b>
                  </label>
                  <input
                    id="droptime"
                    value={dropTime}
                    onChange={handleDropTime}
                    type="date"
                    style={{
                      border: "1px solid #b6b6b6",
                      borderRadius: "6px",
                      backgroundColor: "white",
                      width: "100%",
                    }}
                  ></input>
                </div>

                <button
                  onClick={openModal}
                  type="submit"
                  style={{ border: "1px", borderRadius: "8px" }}
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* modal ------------------------------------ */}

      <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
        <form action="POST" onSubmit={confirmBooking}>
          {/* title */}
          <div className="booking-modal__title">
            <h2>Complete Reservation</h2>
            <IconX onClick={openModal} style={{ cursor: "pointer" }} />
          </div>

          {/* message */}
          <div className="booking-modal__message">
            <h4>
              <IconInfoCircleFilled /> Upon completing this reservation enquiry,
              you will receive:
            </h4>
            <p>
              Your rental voucher to produce on arrival at the rental desk and a
              toll-free customer support number.
            </p>
          </div>

          {/* car info */}
          <div className="booking-modal__car-info">
            <div className="dates-div">
              <div className="booking-modal__car-info__dates">
                <h5>Location & Date</h5>
                <span>
                  <IconMapPinFilled />
                  <div>
                    <h6>Pick-Up Date & Time</h6>
                    <p>
                      {pickTime} /{" "}
                      <input
                        type="time"
                        className="input-time"
                        style={{ width: "10rem" }}
                      ></input>
                    </p>
                  </div>
                </span>
              </div>

              <div className="booking-modal__car-info__dates">
                <span>
                  <IconMapPinFilled />
                  <div>
                    <h6>Drop-Off Date & Time</h6>
                    <p>
                      {dropTime} /{" "}
                      <input
                        type="time"
                        className="input-time"
                        style={{ width: "10rem" }}
                      ></input>
                    </p>
                  </div>
                </span>
              </div>

              <div className="booking-modal__car-info__dates">
                <span>
                  <IconMapPinFilled />
                  <div>
                    <h6>Pick-Up Location</h6>
                    <p>{pickUp}</p>
                  </div>
                </span>
              </div>

              <div className="booking-modal__car-info__dates">
                <span>
                  <IconMapPinFilled />
                  <div>
                    <h6>Drop-Off Location</h6>
                    <p>{dropOff}</p>
                  </div>
                </span>
              </div>
            </div>
            <div className="booking-modal__car-info__model">
              <h5>
                <span>Car -</span> {carType}
              </h5>
              {imgUrl && <img src={imgUrl} alt="car_img" />}
            </div>
          </div>

          {/* personal info */}
          <div className="booking-modal__person-info">
            <h4>Personal Information</h4>
            {/* <form className="info-form"> */}
              <div className="info-form__2col">
                <span>
                  <label>
                    First Name <b>*</b>
                  </label>
                  <input
                    value={name}
                    onChange={handleName}
                    type="text"
                    required
                    placeholder="Enter your first name"
                    style={{
                      border: "1px solid #b6b6b6",
                      borderRadius: "6px",
                      backgroundColor: "white",
                    }}
                  ></input>
                </span>

                <span>
                  <label>
                    Last Name <b>*</b>
                  </label>
                  <input
                    value={lastName}
                    onChange={handleLastName}
                    type="text"
                    required
                    placeholder="Enter your last name"
                    style={{
                      border: "1px solid #b6b6b6",
                      borderRadius: "6px",
                      backgroundColor: "white",
                    }}
                  ></input>
                </span>

                <span>
                  <label>
                    Phone Number <b>*</b>
                  </label>
                  <input
                    value={phone}
                    onChange={handlePhone}
                    type="tel"
                    required
                    placeholder="Enter your phone number"
                    style={{
                      border: "1px solid #b6b6b6",
                      borderRadius: "6px",
                      backgroundColor: "white",
                    }}
                  ></input>
                </span>

                <span>
                  <label>
                    Age <b>*</b>
                  </label>
                  <input
                    value={age}
                    onChange={handleAge}
                    type="number"
                    required
                    placeholder="18"
                    style={{
                      border: "1px solid #b6b6b6",
                      borderRadius: "6px",
                      backgroundColor: "white",
                    }}
                  ></input>
                </span>
              </div>

              <div className="info-form__1col">
                <span>
                  <label>
                    Email <b>*</b>
                  </label>
                  <input
                    value={email}
                    onChange={handleEmail}
                    type="email"
                    required
                    placeholder="Enter your email address"
                    style={{
                      border: "1px solid #b6b6b6",
                      borderRadius: "6px",
                      backgroundColor: "white",
                    }}
                  ></input>
                </span>

                <span>
                  <label>
                    Address <b>*</b>
                  </label>
                  <input
                    value={address}
                    onChange={handleAddress}
                    type="text"
                    required
                    placeholder="Enter your street address"
                    style={{
                      border: "1px solid #b6b6b6",
                      borderRadius: "6px",
                      backgroundColor: "white",
                    }}
                  ></input>
                </span>
              </div>

              <div className="info-form__2col">
                <span>
                  <label>
                    City <b>*</b>
                  </label>
                  <input
                    value={city}
                    onChange={handleCity}
                    type="text"
                    required
                    placeholder="Enter your city"
                    style={{
                      border: "1px solid #b6b6b6",
                      borderRadius: "6px",
                      backgroundColor: "white",
                    }}
                  ></input>
                </span>

                <span>
                  <label>
                    Zip Code <b>*</b>
                  </label>
                  <input
                    value={zipcode}
                    onChange={handleZip}
                    type="text"
                    required
                    placeholder="Enter your zip code"
                    style={{
                      border: "1px solid #b6b6b6",
                      borderRadius: "6px",
                      backgroundColor: "white",
                    }}
                  ></input>
                </span>
              </div>

              <span className="info-form__checkbox">
                <input
                  type="checkbox"
                  style={{
                    border: "1px solid #b6b6b6",
                    borderRadius: "6px",
                    backgroundColor: "white",
                  }}
                ></input>
                <p>Please send me latest news and updates</p>
              </span>

              <div
                className="reserve-button"
                style={{
                  backgroundColor: "white",
                  padding: "1rem",
                  margin: "auto",
                }}
              >
                <button
                  type="submit"
                  style={{ border: "1px", borderRadius: "8px" }}
                >
                  Reserve Now
                </button>
              </div>
            {/* </form> */}
          </div>
        </form>
      </div>
    </>
  );
}

export default BookCar;
