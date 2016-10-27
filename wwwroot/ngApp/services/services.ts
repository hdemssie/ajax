namespace ajax.Services {
    export class TaxService {
        CalculateTax(price) {
            return price * .8;
        }
    }
    angular.module(`ajax`).service(`TaxService`, TaxService);

}