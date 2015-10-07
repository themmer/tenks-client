export default function() {
  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  // this.urlPrefix = 'http://localhost:8080/rest';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  this.namespace = '/rest';

  this.get('/incomes', function(db, request) {
    console.log('incomes db', db);
    console.log('request query params', request.queryParams);
    var result = {incomes: db['incomes'].where({'tickerSymbol': 'MSFT'})};
    console.log('result', result);
    return result;
  });

  this.get('/balanceSheets', function(db, request) {
    console.log('balance sheets db', db);
    console.log('request query params', request.queryParams);
    var result = {balanceSheets: db['balance-sheets'].where(request.queryParams)};
    console.log('result', result);
    return result;
  });

  this.get('/cashFlows', function(db, request) {
    console.log('cashflows db', db);
    console.log('request query params', request.queryParams);
    var result = {cashFlows: db['cash-flows'].where(request.queryParams)};
    console.log('result', result);
    return result;
  });


  /*
    Route shorthand cheatsheet
  */
  /*
    GET shorthands

    // Collections
    this.get('/contacts');
    this.get('/contacts', 'users');
    this.get('/contacts', ['contacts', 'addresses']);

    // Single objects
    this.get('/contacts/:id');
    this.get('/contacts/:id', 'user');
    this.get('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    POST shorthands

    this.post('/contacts');
    this.post('/contacts', 'user'); // specify the type of resource to be created
  */

  /*
    PUT shorthands

    this.put('/contacts/:id');
    this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
  */

  /*
    DELETE shorthands

    this.del('/contacts/:id');
    this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

    // Single object + related resources. Make sure parent resource is first.
    this.del('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    Function fallback. Manipulate data in the db via

      - db.{collection}
      - db.{collection}.find(id)
      - db.{collection}.where(query)
      - db.{collection}.update(target, attrs)
      - db.{collection}.remove(target)

    // Example: return a single object with related models
    this.get('/contacts/:id', function(db, request) {
      var contactId = +request.params.id;

      return {
        contact: db.contacts.find(contactId),
        addresses: db.addresses.where({contact_id: contactId});
      };
    });

  */
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
