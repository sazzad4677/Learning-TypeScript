interface Model<TData, TMethods> {
  data: TData;
  methods: TMethods;
}
interface IUser5 {
  firstName: string;
  lastName: string;
}

interface IMethod {
  fullName(): string;
}

type NewModel = Model<IUser5, IMethod>;

class UserModel implements NewModel {
  data: IUser5;
  methods: IMethod;
  constructor(firstName: string, lastName: string) {
    this.data = { firstName, lastName };
    this.methods = {
      fullName() {
        return `${firstName} ${lastName}`;
      },
    };
  }
}
