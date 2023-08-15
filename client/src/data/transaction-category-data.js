import {
  BillsSVG,
  EducationSVG,
  EntertainmentSVG,
  FoodSVG,
  FriendsSVG,
  FuelSVG,
  GrocerySVG,
  HealthSVG,
  HomeSVG,
  OtherSVG,
  PhoneSVG,
  TravelSVG,
  InterestSVG,
  InvestmentSVG,
  ComputerSVG,
  SalarySVG,
  BusinessSVG,
} from "../../public/svg/index";

const incomeCategory = [
  {
    label: "Salary",
    img: SalarySVG,
  },
  {
    label: "Bank Interest",
    img: InterestSVG,
  },
  {
    label: "Investment",
    img: InvestmentSVG,
  },
  {
    label: "Freelance",
    img: ComputerSVG,
  },
  {
    label: "Business",
    img: BusinessSVG,
  },
  {
    label: "Other",
    img: OtherSVG,
  },
];

const expenseCategory = [
  {
    label: "Bills",
    img: BillsSVG,
  },
  {
    label: "Education",
    img: EducationSVG,
  },

  {
    label: "Entertainment",
    img: EntertainmentSVG,
  },
  {
    label: "Food",
    img: FoodSVG,
  },
  {
    label: "Friends",
    img: FriendsSVG,
  },
  {
    label: "Fuel",
    img: FuelSVG,
  },
  {
    label: "Grocery",
    img: GrocerySVG,
  },
  {
    label: "Health",
    img: HealthSVG,
  },
  {
    label: "Home",
    img: HomeSVG,
  },
  {
    label: "Phone",
    img: PhoneSVG,
  },
  {
    label: "Travel",
    img: TravelSVG,
  },
  {
    label: "Other",
    img: OtherSVG,
  },
];

export { incomeCategory, expenseCategory };
