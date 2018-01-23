class DistrictRepository {
    constructor(originalData) {

        this.data = this.cleanData(originalData);
    }

    cleanData(data) {
        console.log(data)
    }
}

export default DistrictRepository;