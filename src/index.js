import "modern-normalize/modern-normalize.css";
import Dropdown from "@trithereon/dropdown";

document.querySelectorAll(".dropdown").forEach((dropdownContainer) => {
  new Dropdown(dropdownContainer);
});
