namespace ajax.Controllers {
    export class ProductsController {
        public products;
        constructor(TaxService) {
            this.products = [{
                name: `Milk`,
                price: 1.55,
                tax: TaxService.CalculateTax(1.89)

            },
                {
                    name: `pasta`,
                    price: .99,
                    tax: TaxService.CalculateTax(.99)
                },
                {
                    name: `steak`,
                    price: 6.99,
                    tax: TaxService.CalculateTax(6.99)
                }
               ]
        }

        /*  constructor($http: ng.IHttpService) {
              $http.get(`/api/products/`).then((response) => {
                  this.products = response.data;
              });
          }
      }
          */
    }

    angular.module(`ajax`).controller(`ProductsController`, ProductsController);
} 