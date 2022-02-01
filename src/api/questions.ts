export const questions = [
  {
    "id": 1,
    "label": "Full name",
    "name": "fullName",
    "category": "contact",
    "type": "text",
    "validation":
    {
      "minLength": 2,
      "maxLength": 15,
      "isRequired": true
    }

  },
  {
    "id": 2,
    "label": "Role",
    "name": "role",
    "category": "contact",
    "type": "text",
    "validation":
    {
      "minLength": 2,
      "maxLength": 15,
      "isRequired": false
    }
  },
  {
    "id": 3,
    "label": "Phone number",
    "name": "phoneNumber",
    "category": "contact",
    "type": "text",
    "validation":
    {
      "minLength": 2,
      "maxLength": 15,
      "isRequired": true
    }
  },
  {
    "id": 4,
    "label": "Company name",
    "name": "companyName",
    "category": "company",
    "type": "text",
    "validation":
    {
      "minLength": 2,
      "maxLength": 15,
      "isRequired": true
    }
  },
  {
    "id": 5,
    "label": "What is your Federal Employer Identification Number? (FEIN)",
    "name": "FEIN",
    "category": "company",
    "type": "text",
    "validation":
    {
      "minLength": 2,
      "maxLength": 15,
      "isRequired": true
    }
  },
  {
    "id": 6,
    "label": "Years in business",
    "name": "yearsInBusiness",
    "category": "company",
    "type": "number",
    "validation":
    {
      "min": 0,
      "max": 500,
      "isRequired": false
    }
  },
  {
    "id": 7,
    "label": "Number of locations",
    "name": "numberOfLocations",
    "category": "company",
    "type": "number",
    "validation":
    {
      "min": 0,
      "max": 1000000,
      "isRequired": false
    }
  },
  {
    "id": 8,
    "label": "In which states do you operate?",
    "name": "operatingStates",
    "category": "company",
    "type": "text",
    "validation":
    {
      "minLength": 2,
      "maxLength": 15,
      "isRequired": true
    }
  },
  {
    "id": 9,
    "label": "What's the name of the clinic, physician, or ER used for work injuries",
    "name": "clinicName",
    "category": "employee",
    "type": "text",
    "validation":
    {
      "minLength": 2,
      "maxLength": 15,
      "isRequired": true
    }
  },
  {
    "id": 10,
    "label": "Do you provide group medical insurance ?",
    "name": "groupMedicalInsurance",
    "category": "employee",
    "type": "checkbox",
    "subQuestion": {
      "true": [
        {
          "id": 11,
          "label": "Please provide details about the group medical insurance",
          "name": "groupMedicalInsuranceDetails",
          "category": "employee",
          "type": "text",
          "validation":
          {
            "minLength": 2,
            "maxLength": 15,
            "isRequired": false
          }
        }
      ]
    }
  },
  {
    "id": 12,
    "label": "Do you offer a retirement or pension plan",
    "name": "retirementOrPensionPlan",
    "category": "employee",
    "type": "checkbox",
    "subQuestion": {
      "true": [
        {
          "id": 13,
          "label": "Please provide details about retirement or pension plan",
          "name": "retirementOrPensionPlanDetails",
          "category": "employee",
          "type": "text",
          "validation":
          {
            "minLength": 2,
            "maxLength": 15,
            "isRequired": false
          }
        }
      ]
    }
  },
  {
    "id": 14,
    "label": "Do you give paid vacation?",
    "name": "paidVacation",
    "category": "employee",
    "type": "checkbox",
    "subQuestion": {
      "true": [
        {
          "id": 15,
          "label": "Please provide details about the paid vacation",
          "name": "paidVacationDetails",
          "category": "employee",
          "type": "text",
          "validation":
          {
            "minLength": 2,
            "maxLength": 15,
            "isRequired": false
          }
        }
      ]
    }
  },
  {
    "id": 16,
    "label": "How do you want to pay for your policy ?",
    "name": "paymentMethod",
    "category": "payment",
    "type": "radio",
    "options": [
      {
        "label": "I want to pay NewFront",
        "value": "NewFront",
        "description": "You'll pay NewFront instead of paying each insurance company separately. There are no fees",
        "recommended": true
      },
      {

        "label": "I want to pay the insurance company directly",
        "value": "Direct",
        "description": "You'll receive bills from the insurance company and it will be your responsibility to make sure they are paid to keep your coverage"
      }
    ]
  }
]