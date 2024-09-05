const Filters = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="flex flex-col gap-[12px]">
        <h3 className="heading-three">Марка</h3>

        <div>
          <span>JCB</span>
          <span>VOLVO</span>
          <span>KOMATSU</span>
          <span>DEUTZ FAHR</span>
          <span>CLAAS</span>
          <span>NEW HOLLAND</span>
        </div>
      </div>

      <div className="flex flex-col gap-[12px]">
        <h3 className="heading-three">Цена</h3>
      </div>

      <div className="flex flex-col gap-[12px]">
        <h3 className="heading-three">Год выпуска</h3>
      </div>
    </div>
  );
};

export { Filters };
