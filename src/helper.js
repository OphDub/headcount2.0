class DistrictRepository {
    constructor(originalData) {

        this.data = this.cleanData(originalData);
    }

    cleanData(originalData) {
        const dataObj = originalData.reduce( (accu, dataPoint) => {
            if(!accu[ dataPoint.Locaton ]) {
                const datePercent = dataPoint.TimeFrame + ': ' + dataPoint.Data
                accu[ dataPoint.Location ] = {
                    data: datePercent
                }
            }
            return accu            
        }, {})
        return dataObj;
    }
}

export default DistrictRepository;