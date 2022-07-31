export function guard(args: any[]): any[] {
  return args.map((arg) => {
    if (!arg) {
      throw new Error("Argument is null or undefined");
    }
    return arg;
  });
}
