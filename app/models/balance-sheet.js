import DS from 'ember-data';

export default DS.Model.extend({
  accountsPayableAndAccruedExpenses: DS.attr('number'),
  accruedInterest: DS.attr('number'),
  additionalPaidInCapital: DS.attr('number'),
  additionalPaidInCapitalPreferredStock: DS.attr('number'),
  cashAndCashEquivalents: DS.attr('number'),
  cashCashEquivalentsAndShortTermInvestments: DS.attr('number'),
  commitmentsContingencies: DS.attr('number'),
  commonStock: DS.attr('number'),
  deferredCharges: DS.attr('number'),
  deferredIncomeTaxesCurrent: DS.attr('number'),
  deferredIncomeTaxesLongTerm: DS.attr('number'),
  goodwill: DS.attr('number'),
  intangibleAssets: DS.attr('number'),
  inventoriesNet: DS.attr('number'),
  longTermDeferredIncomeTaxLiabilities: DS.attr('number'),
  longTermDeferredLiabilityCharges: DS.attr('number'),
  longTermInvestments: DS.attr('number'),
  minorityInterest: DS.attr('number'),
  otherAccumulatedComprehensiveIncome: DS.attr('number'),
  otherAssets: DS.attr('number'),
  otherCurrentAssets: DS.attr('number'),
  otherCurrentLiabilities: DS.attr('number'),
  otherEquity: DS.attr('number'),
  otherInvestments: DS.attr('number'),
  otherLiabilities: DS.attr('number'),
  partnersCapital: DS.attr('number'),
  pensionPostRetirementObligation: DS.attr('number'),
  preferredStock: DS.attr('number'),
  prepaidExpenses: DS.attr('number'),
  propertyPlantEquipmentNet: DS.attr('number'),
  restrictedCash: DS.attr('number'),
  retainedEarnings: DS.attr('number'),
  temporaryEquity: DS.attr('number'),
  totalAssets: DS.attr('number'),
  totalCurrentAssets: DS.attr('number'),
  totalCurrentLiabilities: DS.attr('number'),
  totalLiabilities: DS.attr('number'),
  totalLongTermDebt: DS.attr('number'),
  totalReceivablesNet: DS.attr('number'),
  totalShortTermDebt: DS.attr('number'),
  totalStockholdersEquity: DS.attr('number'),
  treasuryStock: DS.attr('number')
});
