interface Props {
  color: string;
  height?: number;
  width?: number;
}

export const Logo = ({ color, height, width }: Props) => {
  return (
    <svg
      fill={color}
      height={height ? height + "px" : "800px"}
      width={width ? width + "px" : "800px"}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 352.644 352.644"
      xmlSpace="preserve"
    >
      <path
        d="M324.478,51.943L177.985,0.285c-1.076-0.38-2.25-0.38-3.326,0L28.166,51.943c-1.999,0.705-3.337,2.595-3.337,4.715
	c0,52.278,13.834,112.711,37.955,165.805c19.567,43.069,54.751,100.519,111.248,129.625c0.719,0.37,1.504,0.555,2.29,0.555
	c0.786,0,1.571-0.185,2.29-0.555c56.497-29.106,91.681-86.556,111.248-129.625c24.121-53.094,37.955-113.527,37.955-165.805
	C327.815,54.538,326.477,52.648,324.478,51.943z M236.322,222.07h-120c-2.549,0-4.615-2.066-4.615-4.615
	c0-31.84,22.326-41.677,34.321-46.961c2.31-1.018,5.394-2.376,6.478-3.226c0.269-3.704-1.259-5.735-4.534-9.705
	c-4.518-5.476-10.703-12.974-10.703-29.501c0-28.058,14.965-45.487,39.054-45.487c24.089,0,39.053,17.429,39.053,45.487
	c0,16.527-6.186,24.026-10.702,29.501c-3.276,3.971-4.804,6.001-4.535,9.705c1.084,0.85,4.168,2.208,6.479,3.225
	c11.994,5.285,34.321,15.121,34.321,46.962C240.937,220.003,238.871,222.07,236.322,222.07z"
      />
    </svg>
  );
};