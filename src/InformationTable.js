import React from "react";

const InformationTable = ({ phoneBook }) => {
  return (
    <div>
      <h6 className="d-flex justify-content-start px-5 py-3">
        Information Table
      </h6>

      <div className="d-flex justify-content-start px-5">
        <table>
          <thead>
            <tr>
              <th className="px-4">Firstname</th>
              <th className="px-4">Lastname</th>
              <th className="px-4">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {phoneBook &&
              phoneBook.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.phoneNumber}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InformationTable;
