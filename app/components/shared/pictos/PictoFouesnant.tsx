export function PictoFouesnant({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 76 89"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        fill="currentColor"
        d="M70.9 50.504c2.62-4.319 5.094-6.07 1.735-11.2.382-2.338 2.652-5.066-.233-5.517-2.462-.387-4.138.551-5.421 3.063-.393.168-.761.345-1.116.529-.133-1.077-.966-1.971-3.941-.567 2.449-6.035-.488-5.376 1.511-8.46 1.721-2.653.587-6.055-2.613-7.363 3.568-4.987-4.626-6.675-8.329-2.352.038-2.446-.292-6.24-1.827-5.477-2.138 1.065.83-3.474-1.32-6.648-3.723-5.502-7.948-4.633-9.183-2.758-1.212-.419-1.234-2.473-4.637-2.006-1.837-3.633-6.098.249-4.843 4.235-3.397-.184-4.166 2.498-1.622 3.948-2.282 1.286-4.83 4.45-4.168 6.892-.768 1.277-1.123 3.005-.759 5.328-2.081-1.614-6.027.523-5.249 5.047-4.159-3.654-6.766 3.396-6.08 6.969-1.406.146-2.521 1.259-3.251 2.88-2.331-1.1-7.631 1.259-4.976 3.877-8.916 3.15-1.59 14.284 3.77 14.489-1.6 3.719.988 6.779 5.165 7.908.421 3.823 9.415 3.58 10.788-.92.168.084.344.154.528.207 1.945 3.058 4.399 2.933 6.533 1.742l.008.008c1.785 1.665 4.634 6.615 6.707 9.943-.334 6.246-.548 12.534-.579 14.398h6.697c.04-3.187-1.451-13.229-1.476-14.888-.018-1.127.057-3.189.125-5.913 1.203-1.549 2.697-3.36 4.18-4.871 1.86-.172 7.36-.826 12.851-2.889 1.352.068 3.036-.117 5.306-.768-4.045 5.469 5.503 4.512 8.38.187 3.075-4.626 3.036-12.172-2.661-9.053zm-31.796 11.03c-.282 1.807-.541 4.879-.766 8.332-1.501-2.12-3.512-4.814-5.29-6.709 1.491-1.275 2.641-2.844 3.039-3.67.229-.475 1.411-.108 3.289.135a82.29 82.29 0 01-.272 1.912zm3.812 2.697c.019-1.392.028-2.892.022-4.475 1.749-.113 3.764-.524 5.97-1.547.496-.23 1.479-.059 2.754.258-3.782 1.024-6.687 3.43-8.746 5.764zm5.471-2.499c1.159-1.017 2.251-1.73 3.118-1.841.542-.07 1.292-.388 2.173-.894 1.517.401 3.234.824 4.963 1.019-4.368 1.303-7.925 1.704-10.254 1.716z"
      ></path>
    </svg>
  );
}