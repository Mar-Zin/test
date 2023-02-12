import Select from "react-select";
import { Button } from "@alfalab/core-components/button";
import { Controller, useForm } from "react-hook-form";
interface iData {
  colors: string | null;
  sizes: string | null;
  models: string | null;
  stickerNumbers: string | null;
}

const SelectForm = ({ models, colors, sizes, stickerNumbers }: any) => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      colors: colors ? colors[0] : null,
      sizes: sizes ? sizes[0] : null,
      models: models ? models[0] : null,
      stickerNumbers: stickerNumbers ? stickerNumbers[0] : null,
    },
  });
  const onSubmit = (data: iData) => {
    console.log(data);
  };
  const formateDate = (dataArray: string[]) => {
    return dataArray.map((data) => ({ value: data, label: data }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[160px]">
      {models && (
        <Controller
          control={control}
          name="models"
          render={({ field: { onChange, value } }) => {
            return (
              <label className="text-xs font-medium">
                модель
                <Select
                  options={formateDate(models)}
                  onChange={(newValue) => onChange(newValue?.value)}
                  value={formateDate(models).find(
                    (option) => option.value === value
                  )}
                />
              </label>
            );
          }}
        />
      )}
      {colors && (
        <Controller
          control={control}
          name="colors"
          render={({ field: { onChange, value } }) => {
            return (
              <label className="text-xs font-medium">
                цвет
                <Select
                  options={formateDate(colors)}
                  onChange={(newValue) => onChange(newValue?.value)}
                  value={formateDate(colors).find(
                    (option) => option.value === value
                  )}
                />
              </label>
            );
          }}
        />
      )}
      {sizes && (
        <Controller
          control={control}
          name="sizes"
          render={({ field: { onChange, value } }) => {
            return (
              <label className="text-xs font-medium">
                размер
                <Select
                  options={formateDate(sizes)}
                  onChange={(newValue) => onChange(newValue?.value)}
                  value={formateDate(sizes).find(
                    (option) => option.value === value
                  )}
                />
              </label>
            );
          }}
        />
      )}
      {stickerNumbers && (
        <Controller
          control={control}
          name="stickerNumbers"
          render={({ field: { onChange, value } }) => {
            return (
              <label className="text-xs font-medium">
                номер стикера
                <Select
                  options={formateDate(stickerNumbers)}
                  onChange={(newValue) => onChange(newValue?.value)}
                  value={formateDate(stickerNumbers).find(
                    (option) => option.value === value
                  )}
                />
              </label>
            );
          }}
        />
      )}
      <Button
        className="bg-alfa-red px-8 mt-4 text-white hover:bg-alfa-red rounded-full text-sm font-black"
        size="s"
        type="submit"
      >
        В корзину
      </Button>
    </form>
  );
};

export default SelectForm;
