function DistrictRepository(data) {
    const moarData = data.map( dataPoint => {
        console.log(dataPoint.Data)
    })
    return moarData;
}

module.exports = DistrictRepository;

// return name: this.Location,
// year: this.TimeFrame,
// dataFormat: this.DataFormat,
// data: this.Data
