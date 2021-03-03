export default  [
  {
    fieldGroupClassName: "row",
    fieldGroup: [
      {
        className: "col-md-6",
        key: "name",
        type: "input",
        templateOptions: {
          label: "车辆用途",
          placeholder: "车辆用途",
          required: true
        }
      }
    ]
  },
  { template: "<hr /> "},
  {
    key: "description",
    type: "input",
    templateOptions: {
      label: "用途描述",
      placeholder: ""
    }
  }
];
