/*
  This is an example factory definition.

  Create more files in this directory to define additional factories.
*/
import Mirage/*, {faker} */ from 'ember-cli-mirage';

export default Mirage.Factory.extend(
  {
    "id": 1,
    "lang": "en-US",
    "cashFlowStatement": {
      "cashFromDepreciationAmortization": {
        "display": "Cash Flow Depreciation Amortization",
        "help": ""
      },
      "changeInInventories": {
        "display": "Change In Inventories",
        "help": ""
      },
      "cashFromInvestingActivities": {
        "display": "Cash From Investing Activities",
        "help": ""
      },
      "cashFromDiscontinuedOperations": {
        "display": "Cash From Discontinued Operations",
        "help": ""
      },
      "changeInPrepaidExpenses": {
        "display": "Change In Prepaid Expenses",
        "help": ""
      },
      "changeInCurrentAssets": {
        "display": "Change In Current Assets",
        "help": ""
      },
      "changeInAccountsPayableAccruedExpenses": {
        "display": "Change In Accounts Payable Accrued Expenses",
        "help": ""
      },
      "changeInOtherLiabilities": {
        "display": "Change In Other Liabilities",
        "help": ""
      },
      "otherAdjustments": {
        "display": "Other Adjustments",
        "help": ""
      },
      "changeInDebtNet": {
        "display": "Change in Debt Net",
        "help": ""
      },
      "changeInOtherAssets": {
        "display": "Change In Other Assets",
        "help": ""
      },
      "changeInOtherCurrentLiabilities": {
        "display": "Change In Other Current Liabilities",
        "help": ""
      },
      "employeeCompensation": {
        "display": "Employee Compensation",
        "help": ""
      },
      "adjustmentForEquityEarnings": {
        "display": "Adjustment For Equity Earnings",
        "help": ""
      },
      "adjustmentForMinorityInterest": {
        "display": "Adjustment For Minority Interest",
        "help": ""
      },
      "changeInDeferredRevenue": {
        "display": "Change in Deferred Revenue",
        "help": ""
      },
      "effectOfExChangeRateOnCash": {
        "display": "Effect Of Exchange Rate On Cash",
        "help": ""
      },
      "deferredIncomeTaxes": {
        "display": "Deferred Income Taxes",
        "help": ""
      },
      "dividendsPaid": {
        "display": "Dividends Paid",
        "help": ""
      },
      "totalAdjustments": {
        "display": "Total Adjustments",
        "help": ""
      },
      "capitalExpenditures": {
        "display": "Capital Expenditures",
        "help": ""
      },
      "stockOptionTaxBenefits": {
        "display": "Stock Option Tax Benefits",
        "help": ""
      },
      "realizedGainsLosses": {
        "display": "Realized Gains Losses",
        "help": ""
      },
      "changeInOperatingAssetsLiabilities": {
        "display": "Change In Operating Assets Liabilities",
        "help": ""
      },
      "changeInIncomeTaxesPayable": {
        "display": "Change In Income Taxes Payable",
        "help": ""
      },
      "changeInEquityNet": {
        "display": "Change In Equity Net",
        "help": ""
      },
      "otherAssetLiabilityChangesNet": {
        "display": "Other Asset Liabilities Changes Net",
        "help": ""
      },
      "netChangeInCash": {
        "display": "Net Change In Cash",
        "help": ""
      },
      "cashFromOperatingActivities": {
        "display": "Cash From Operating Activities",
        "help": ""
      },
      "saleOfPropertyPlantEquipment": {
        "display": "Sale Of Property Plant Equipment",
        "help": ""
      },
      "acquisitionSaleOfBusinessNet": {
        "display": "Acquisition On Sale of Businses Net",
        "help": ""
      },
      "changeInOtherCurrentAssets": {
        "display": "Change In Other Current Assets",
        "help": ""
      },
      "adjustmentForSpecialCharges": {
        "display": "Adjustment For Special Charges",
        "help": ""
      },
      "cashFromFinancingActivities": {
        "display": "Cash From Financing Activities",
        "help": ""
      },
      "otherInvestingActivities": {
        "display": "Other Investing Activities",
        "help": ""
      },
      "investmentChangesNet": {
        "display": "Investment Changes Net",
        "help": ""
      },
      "otherFinancingActivitiesNet": {
        "display": "Other Financing Activities",
        "help": ""
      },
      "changeInAccountsReceivable": {
        "display": "Change In Accounts Receivable",
        "help": ""
      },
      "changeInCurrentLiabilities": {
        "display": "Change in Current Liabilities",
        "help": ""
      }
    },
    "incomeStatement": {
      "restructuringRemediationImpairmentProvisions": {
        "display": "Restructuring Remediation Imparment Provisions",
        "help": ""
      },
      "accountingChange": {
        "display": "Accounting Change",
        "help": "HELP!"
      },
      "discontinuedOperations": {
        "display": "Discontinued Operations",
        "help": ""
      },
      "interestIncome": {
        "display": "Interest Income",
        "help": ""
      },
      "researchDevelopmentExpense": {
        "display": "Research Development Expense",
        "help": ""
      },
      "interestExpense": {
        "display": "Interest Expense",
        "help": ""
      },
      "earningsBeforeInterestAndTax": {
        "display": "Earnings Before Income Tax",
        "help": ""
      },
      "dilutedEpsNetIncome": {
        "display": "Diluted EPS Net Income",
        "help": ""
      },
      "basicEpsNetIncome": {
        "display": "Basic EPS Net Income",
        "help": ""
      },
      "incomeTaxes": {
        "display": "Income Taxes",
        "help": ""
      },
      "minorityInterestEquityEarnings": {
        "display": "Minority Interest Equity Earnings",
        "help": ""
      },
      "totalRevenue": {
        "display": "Total Revenue",
        "help": ""
      },
      "grossProfit": {
        "display": "Gross Profit",
        "help": ""
      },
      "otherOperatingExpenses": {
        "display": "Other Operating Expenses",
        "help": ""
      },
      "incomeBeforeExtraordinaryItems": {
        "display": "Income Before Extraordinary Items",
        "help": ""
      },
      "equityEarnings": {
        "display": "Equity Earnings",
        "help": ""
      },
      "costOfRevenue": {
        "display": "Cost of Revenue",
        "help": ""
      },
      "incomeBeforeTaxes": {
        "display": "Income Before Taxes",
        "help": ""
      },
      "sellingGeneralAdministrativeExpenses": {
        "display": "Selling Gernal Adminstrative Expenses",
        "help": ""
      },
      "extraOrdinaryItems": {
        "display": "Extraordinary Items",
        "help": ""
      },
      "netIncome": {
        "display": "Net Income",
        "help": ""
      },
      "depreciationAmortizationExpense": {
        "display": "Depreciation Amortization Expense",
        "help": ""
      },
      "otherNonOperatingIncomeExpense": {
        "display": "Other Non-operating Income Expenses",
        "help": ""
      },
      "netIncomeApplicableToCommon": {
        "display": "Net Income Applicable To Common",
        "help": ""
      },
      "operatingProfit": {
        "display": "Operating Profit",
        "help": ""
      }
    },
    "balanceSheet": {
      "goodwill": {
        "display": "Goodwill",
        "help": ""
      },
      "preferredStock": {
        "display": "Preferred Stock",
        "help": ""
      },
      "totalAssets": {
        "display": "Total Assets",
        "help": ""
      },
      "prepaidExpenses": {
        "display": "Prepaid Expenses",
        "help": ""
      },
      "commitmentsContingencies": {
        "display": "Commitments Contingencies",
        "help": ""
      },
      "deferredIncomeTaxesCurrent": {
        "display": "Deferred Income Taxes Current",
        "help": ""
      },
      "totalCurrentLiabilities": {
        "display": "Total Current Liabilities",
        "help": ""
      },
      "otherCurrentAssets": {
        "display": "Other Current Assets",
        "help": ""
      },
      "totalLongTermDebt": {
        "display": "Total Long Term Debt",
        "help": ""
      },
      "inventoriesNet": {
        "display": "Inventories Net",
        "help": ""
      },
      "propertyPlantEquipmentNet": {
        "display": "Property Plant Equipment",
        "help": ""
      },
      "additionalPaidInCapital": {
        "display": "Additional Paid In Capital",
        "help": ""
      },
      "otherLiabilities": {
        "display": "Other Liabilities",
        "help": ""
      },
      "additionalPaidInCapitalPreferredStock": {
        "display": "Additional Paid In Capital Preferred Stock",
        "help": ""
      },
      "otherInvestments": {
        "display": "Other Investments",
        "help": ""
      },
      "longTermInvestments": {
        "display": "Long Term Investments",
        "help": ""
      },
      "retainedEarnings": {
        "display": "Retained Earnings",
        "help": ""
      },
      "pensionPostRetirementObligation": {
        "display": "Pension Post Retirement Obligation",
        "help": ""
      },
      "cashAndCashEquivalents": {
        "display": "Cash and Cash Equivalents",
        "help": ""
      },
      "partnersCapital": {
        "display": "Partners Capital",
        "help": ""
      },
      "totalShortTermDebt": {
        "display": "Total Short Term Debt",
        "help": ""
      },
      "otherAssets": {
        "display": "Other Assets",
        "help": ""
      },
      "restrictedCash": {
        "display": "Restrict Cash",
        "help": ""
      },
      "deferredCharges": {
        "display": "Deferred Charges",
        "help": ""
      },
      "totalCurrentAssets": {
        "display": "Total Current Assets",
        "help": ""
      },
      "totalLiabilities": {
        "display": "Total Liabilities",
        "help": ""
      },
      "accruedInterest": {
        "display": "Accrued Interest",
        "help": ""
      },
      "treasuryStock": {
        "display": "Treasury Stock",
        "help": ""
      },
      "totalStockholdersEquity": {
        "display": "Total Stock Holders Equity",
        "help": ""
      },
      "accountsPayableAndAccruedExpenses": {
        "display": "Accounts Payable And Accrued Expenses",
        "help": ""
      },
      "deferredIncomeTaxesLongTerm": {
        "display": "Deferred Income Taxes Long Term",
        "help": ""
      },
      "longTermDeferredLiabilityCharges": {
        "display": "Long Term Deferred Liabilities Charges",
        "help": ""
      },
      "intangibleAssets": {
        "display": "Intangible Assets",
        "help": ""
      },
      "commonStock": {
        "display": "Common Stock",
        "help": ""
      },
      "temporaryEquity": {
        "display": "Temporary Equity",
        "help": ""
      },
      "totalReceivablesNet": {
        "display": "Total Receivables Net",
        "help": ""
      },
      "cashCashEquivalentsAndShortTermInvestments": {
        "display": "Cash and Cash Equivalents And Short Term Investments",
        "help": ""
      },
      "longTermDeferredIncomeTaxLiabilities": {
        "display": "Long Term Deferred Income Tax Liabilities",
        "help": ""
      },
      "otherCurrentLiabilities": {
        "display": "Other Current Liabilities",
        "help": ""
      },
      "minorityInterest": {
        "display": "Minority Interest",
        "help": ""
      },
      "otherEquity": {
        "display": "Other Equity",
        "help": ""
      },
      "otherAccumulatedComprehensiveIncome": {
        "display": "Other Accumulated Comprehensive Income",
        "help": ""
      }
    }
  }


  // {
  // name: 'Pete',                         // strings
  // age: 20,                              // numbers
  // tall: true,                           // booleans

  // email: function(i) {                  // and f\unctions
  //   return 'person' + i + '@test.com';
  // },

  // firstName: faker.name.firstName,       // using faker
  // lastName: faker.name.firstName,
  // zipCode: faker.address.zipCode
// }

);
