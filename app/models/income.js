import DS from 'ember-data';

export default DS.Model.extend({
  accountingChange: DS.attr('number'),
  basicEpsNetIncome: DS.attr('number'),
  costOfRevenue: DS.attr('number'),
  depreciationAmortizationExpense: DS.attr('number'),
  dilutedEpsNetIncome: DS.attr('number'),
  discontinuedOperations: DS.attr('number'),
  earningsBeforeInterestAndTax: DS.attr('number'),
  equityEarnings: DS.attr('number'),
  extraOrdinaryItems: DS.attr('number'),
  grossProfit: DS.attr('number'),
  incomeBeforeExtraordinaryItems: DS.attr('number'),
  incomeBeforeTaxes: DS.attr('number'),
  incomeTaxes: DS.attr('number'),
  interestExpense: DS.attr('number'),
  interestIncome: DS.attr('number'),
  minorityInterestEquityEarnings: DS.attr('number'),
  netIncome: DS.attr('number'),
  netIncomeApplicableToCommon: DS.attr('number'),
  operatingProfit: DS.attr('number'),
  otherNonOperatingIncomeExpense: DS.attr('number'),
  otherOperatingExpenses: DS.attr('number'),
  researchDevelopmentExpense: DS.attr('number'),
  restructuringRemediationImpairmentProvisions: DS.attr('number'),
  sellingGeneralAdministrativeExpenses: DS.attr('number'),
  totalRevenue: DS.attr('number')
});
