import React, { Component } from 'react';

class MenuKontak extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alamat: 'Jl. Swadaya IV, Pd Ranggon, Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13860',
      kontak: 'Kontak Kami : 08111815011',
    };
  }

  render() {
    return (
      <div>
        <center>
          <h3>{this.state.alamat}</h3>
          <h4>{this.state.kontak}</h4>
        </center>
      </div>
    );
  }
}

export default MenuKontak;
