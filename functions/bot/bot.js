// const { config } = require("dotenv");
// const express = require("express");
// const app = express();
// const cors = require("cors");
// const fs = require("fs");
// const { Scenes, session, Telegraf } = require("telegraf");
// config({
//   path: "functions\\.env",
// });
// const bot = new Telegraf(process.env.TELEGRAM_BOT_API);
// app.use(express.json());
// app.use(cors());
// const superWizard = new Scenes.WizardScene(
//   "super-wizard",
//   (ctx) => {
//     ctx.reply("1) Type of message:\n1. Tech\n2. Non-Tech");
//     ctx.session.command = ctx.message.text;
//     return ctx.wizard.next();
//   },
//   (ctx) => {
//     ctx.session.type = ctx.message.text === "1" ? "Tech" : "Non-Tech";
//     ctx.session.groups = { Tech: -514549590, "Non-Tech": -514549590 };
//     ctx.session.community =
//       ctx.session.type === "Tech"
//         ? "https://t.me/kodeverse/"
//         : "https://t.me/kodeverseNT/";
//     ctx.reply("1) One Update\n2) Many Update");
//     return ctx.wizard.next();
//   },
//   (ctx) => {
//     ctx.session.update = ctx.message.text === "1" ? "one" : "many";
//     ctx.session.job = "Check Linkedin Page Job Posts | Thier  Career Site";
//     ctx.session.domain =
//       ctx.session.type === "Tech"
//         ? "IT, Software, Product, Engineering, Management"
//         : "HR, Marketing, Operations, Finance, Sales";
//     // ctx.session.groups = { Tech: -1001727141534, "Non-Tech": -1001727141534 };
//     // change community from string to array when type is both, Add both url as array elements

//     ctx.reply("2) Company Name: \n3) Email: ");
//     return ctx.wizard.next();
//   },
//   (ctx) => {
//     if (ctx.session.update === "one") {
//       ctx.session.company_name = ctx.message.text.split("\n")[0];
//       ctx.session.email = ctx.message.text.split("\n")[1];
//       bot.telegram.sendMessage(
//         ctx.chat.id,
//         `Company Name: ${ctx.session.company_name}\nType: ${ctx.session.type}\n\nJob: ${ctx.session.job}\nDomain: ${ctx.session.domain}\nEmail: ${ctx.session.email}\n\nJoin Community: ${ctx.session.community}`,
//         {
//           reply_markup: {
//             inline_keyboard: [
//               [
//                 { text: "Confirm & Send!", callback_data: "confirm" },
//                 { text: "Redo!", callback_data: "redo" },
//                 { text: "Delete!", callback_data: "delete" },
//               ],
//             ],
//           },
//         }
//       );
//     } else {
//       ctx.session.company_details = ctx.message.text.split("\n\n").map((e) => {
//         return { name: e.split("\n")[0], email: e.split("\n")[1] };
//       });
//       for (let index in ctx.session.company_details) {
//         setTimeout(() => {
//           ctx.reply(
//             `Company Name: ${ctx.session.company_details[index].name}\nType: ${ctx.session.type}\n\nJob: ${ctx.session.job}\nDomain: ${ctx.session.domain}\nEmail: ${ctx.session.company_details[index].email}\n\nJoin Community: ${ctx.session.community}`
//           );
//         }, 1000 * index);
//       }
//       setTimeout(() => {
//         bot.telegram.sendMessage(ctx.chat.id, `Perform Action`, {
//           reply_markup: {
//             inline_keyboard: [
//               [
//                 { text: "Confirm & Send!", callback_data: "confirm" },
//                 { text: "Redo!", callback_data: "redo" },
//                 { text: "Stop!", callback_data: "stop" },
//               ],
//             ],
//           },
//         });
//       }, 1000 * ctx.session.company_details.length);
//     }
//     return ctx.wizard.next();
//   }
// );
// superWizard.command("/restart", (ctx) => {
//   ctx.scene.leave();
//   ctx.reply("Cancelled!!!");
// });
// superWizard.action("confirm", (ctx) => {
//   if (ctx.session.update === "one") {
//     bot.telegram.sendMessage(
//       ctx.session.groups[ctx.session.type],
//       `Company Name: ${ctx.session.company_name}\nType: ${ctx.session.type}\n\nJob: ${ctx.session.job}\nDomain: ${ctx.session.domain}\nEmail: ${ctx.session.email}\n\nJoin Community: ${ctx.session.community}`
//     );
//     fs.writeFileSync(
//       "./file.json",
//       JSON.stringify(ctx.session, null, 2),
//       {
//         encoding: "utf-8",
//       },
//       function (err) {
//         if (err) console.log("Error occurred", err);
//         console.log("File write successfull");
//       }
//     );
//     ctx
//       .replyWithDocument({ source: "./file.json" })
//       .then((data) => {
//         console.log(data);
//         fs.unlink("./file.json", (err) => {
//           if (err) console.log(err);
//           else {
//             console.log("\nDeleted file: ./file.json");
//           }
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });

//     ctx.reply("Message Send ????");
//   } else {
//     for (let index in ctx.session.company_details) {
//       setTimeout(() => {
//         bot.telegram.sendMessage(
//           ctx.session.groups[ctx.session.type],
//           `Company Name: ${ctx.session.company_details[index].name}\nType: ${ctx.session.type}\n\nJob: ${ctx.session.job}\nDomain: ${ctx.session.domain}\nEmail: ${ctx.session.company_details[index].email}\n\nJoin Community: ${ctx.session.community}`
//         );
//       }, 10000 * index);
//     }
//     let lengthOfAllMessages = ctx.session.company_details.length - 1;
//     setTimeout(() => {
//       ctx.reply("All Message Send ????");
//       fs.writeFileSync(
//         "./file.json",
//         JSON.stringify(ctx.session, null, 2),
//         {
//           encoding: "utf-8",
//         },
//         function (err) {
//           if (err) console.log("Error occurred", err);
//           console.log("File write successfull");
//         }
//       );
//       ctx
//         .replyWithDocument({ source: "./file.json" })
//         .then((data) => {
//           console.log(data);
//           fs.unlink("./file.json", (err) => {
//             if (err) console.log(err);
//             else {
//               console.log("\nDeleted file: ./file.json");
//             }
//           });
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }, lengthOfAllMessages * 10000);
//   }
// });

// // superWizard

// superWizard.action("redo", (ctx) => {
//   ctx.reply("Restarting Session!");
//   ctx.session = {};
//   ctx.reply("Please Click Here To Redo The Sesssion /start");
// });
// superWizard.action("delete", (ctx) => {
//   ctx.session = {};
//   ctx.reply("Session Stopped & Deleted!");
//   ctx.scene.leave();
// });
// const stage = new Scenes.Stage([superWizard]);
// bot.catch((err, ctx) => {
//   console.log(`Ooops, encountered an error for ${ctx.updateType}`, err);
// });
// bot.use(session());
// bot.use(stage.middleware());
// bot.command("start", async (ctx) => {
//   const chatMember = await bot.telegram.getChatMember(-514549590, 951422798);
//   if (chatMember === "administrator" || "creator") {
//     ctx.scene.enter("super-wizard");
//   } else {
//     ctx.reply("You are Not Admin ");
//   }
// });

// bot.hears("/show_message", (ctx) => {
//   ctx.reply(
//     `Your Message Looks Like This:-\n\nCompany Name: ${ctx.session.company_name}\nType: ${ctx.session.type}\nJob: ${ctx.session.job}\nDomain: ${ctx.session.domain}\nEmail: ${ctx.session.email}\nJoin Community: ${ctx.session.community}`
//   );
// });
// // bot.launch();
// exports.handler = async (event) => {
//   try {
//     console.log({ "event.body": event.body });
//     await bot.handleUpdate(JSON.parse(event.body));
//     return { statusCode: 200, body: "Done!" };
//   } catch (e) {
//     console.error("error in handler:", e);
//     return {
//       statusCode: 400,
//       body: "This endpoint is meant for bot and telegram communication",
//     };
//   }
// };
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const { Scenes, session, Telegraf } = require("telegraf");
const bot = new Telegraf(process.env.TELEGRAM_BOT_API);
app.use(express.json());
app.use(cors());
const superWizard = new Scenes.WizardScene(
  "super-wizard",
  (ctx) => {
    ctx.reply("1) Type of message:\n1. Tech\n2. Non-Tech");
    ctx.session.command = ctx.message.text;
    return ctx.wizard.next();
  },
  (ctx) => {
    ctx.session.type = ctx.message.text === "1" ? "Tech" : "Non-Tech";
    ctx.session.groups = { Tech: -514549590, "Non-Tech": -514549590 };
    ctx.session.community =
      ctx.session.type === "Tech"
        ? "https://t.me/kodeverse/"
        : "https://t.me/kodeverseNT/";
    ctx.reply("1) One Update\n2) Many Update");
    return ctx.wizard.next();
  },
  (ctx) => {
    ctx.session.update = ctx.message.text === "1" ? "one" : "many";
    ctx.session.job = "Check Linkedin Page Job Posts | Thier  Career Site";
    ctx.session.domain =
      ctx.session.type === "Tech"
        ? "IT, Software, Product, Engineering, Management"
        : "HR, Marketing, Operations, Finance, Sales";
    // ctx.session.groups = { Tech: -1001727141534, "Non-Tech": -1001727141534 };
    // change community from string to array when type is both, Add both url as array elements

    ctx.reply("2) Company Name: \n3) Email: ");
    return ctx.wizard.next();
  },
  (ctx) => {
    if (ctx.session.update === "one") {
      ctx.session.company_name = ctx.message.text.split("\n")[0];
      ctx.session.email = ctx.message.text.split("\n")[1];
      bot.telegram.sendMessage(
        ctx.chat.id,
        `Company Name: ${ctx.session.company_name}\nType: ${ctx.session.type}\n\nJob: ${ctx.session.job}\nDomain: ${ctx.session.domain}\nEmail: ${ctx.session.email}\n\nJoin Community: ${ctx.session.community}`,
        {
          reply_markup: {
            inline_keyboard: [
              [
                { text: "Confirm & Send!", callback_data: "confirm" },
                { text: "Redo!", callback_data: "redo" },
                { text: "Delete!", callback_data: "delete" },
              ],
            ],
          },
        }
      );
    } else {
      ctx.session.company_details = ctx.message.text.split("\n\n").map((e) => {
        return { name: e.split("\n")[0], email: e.split("\n")[1] };
      });
      for (let index in ctx.session.company_details) {
        setTimeout(() => {
          ctx.reply(
            `Company Name: ${ctx.session.company_details[index].name}\nType: ${ctx.session.type}\n\nJob: ${ctx.session.job}\nDomain: ${ctx.session.domain}\nEmail: ${ctx.session.company_details[index].email}\n\nJoin Community: ${ctx.session.community}`
          );
        }, 1000 * index);
      }
      setTimeout(() => {
        bot.telegram.sendMessage(ctx.chat.id, `Perform Action`, {
          reply_markup: {
            inline_keyboard: [
              [
                { text: "Confirm & Send!", callback_data: "confirm" },
                { text: "Redo!", callback_data: "redo" },
                { text: "Stop!", callback_data: "stop" },
              ],
            ],
          },
        });
      }, 1000 * ctx.session.company_details.length);
    }
    return ctx.wizard.next();
  }
);
superWizard.command("/restart", (ctx) => {
  ctx.scene.leave();
  ctx.reply("Cancelled!!!");
});
superWizard.action("confirm", (ctx) => {
  if (ctx.session.update === "one") {
    bot.telegram.sendMessage(
      ctx.session.groups[ctx.session.type],
      `Company Name: ${ctx.session.company_name}\nType: ${ctx.session.type}\n\nJob: ${ctx.session.job}\nDomain: ${ctx.session.domain}\nEmail: ${ctx.session.email}\n\nJoin Community: ${ctx.session.community}`
    );
    fs.writeFileSync(
      "./file.json",
      JSON.stringify(ctx.session, null, 2),
      {
        encoding: "utf-8",
      },
      function (err) {
        if (err) console.log("Error occurred", err);
        console.log("File write successfull");
      }
    );
    ctx
      .replyWithDocument({ source: "./file.json" })
      .then((data) => {
        console.log(data);
        fs.unlink("./file.json", (err) => {
          if (err) console.log(err);
          else {
            console.log("\nDeleted file: ./file.json");
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });

    ctx.reply("Message Send ????");
  } else {
    for (let index in ctx.session.company_details) {
      setTimeout(() => {
        bot.telegram.sendMessage(
          ctx.session.groups[ctx.session.type],
          `Company Name: ${ctx.session.company_details[index].name}\nType: ${ctx.session.type}\n\nJob: ${ctx.session.job}\nDomain: ${ctx.session.domain}\nEmail: ${ctx.session.company_details[index].email}\n\nJoin Community: ${ctx.session.community}`
        );
      }, 10000 * index);
    }
    let lengthOfAllMessages = ctx.session.company_details.length - 1;
    setTimeout(() => {
      ctx.reply("All Message Send ????");
      fs.writeFileSync(
        "./file.json",
        JSON.stringify(ctx.session, null, 2),
        {
          encoding: "utf-8",
        },
        function (err) {
          if (err) console.log("Error occurred", err);
          console.log("File write successfull");
        }
      );
      ctx
        .replyWithDocument({ source: "./file.json" })
        .then((data) => {
          console.log(data);
          fs.unlink("./file.json", (err) => {
            if (err) console.log(err);
            else {
              console.log("\nDeleted file: ./file.json");
            }
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }, lengthOfAllMessages * 10000);
  }
});

// superWizard

superWizard.action("redo", (ctx) => {
  ctx.reply("Restarting Session!");
  ctx.session = {};
  ctx.reply("Please Click Here To Redo The Sesssion /start");
});
superWizard.action("delete", (ctx) => {
  ctx.session = {};
  ctx.reply("Session Stopped & Deleted!");
  ctx.scene.leave();
});
const stage = new Scenes.Stage([superWizard]);
bot.catch((err, ctx) => {
  console.log(`Ooops, encountered an error for ${ctx.updateType}`, err);
});
bot.use(session());
bot.use(stage.middleware());
bot.command("start", async (ctx) => {
  const chatMember = await bot.telegram.getChatMember(-514549590, 951422798);
  if (chatMember === "administrator" || "creator") {
    ctx.scene.enter("super-wizard");
  } else {
    ctx.reply("You are Not Admin ");
  }
});

bot.hears("/show_message", (ctx) => {
  ctx.reply(
    `Your Message Looks Like This:-\n\nCompany Name: ${ctx.session.company_name}\nType: ${ctx.session.type}\nJob: ${ctx.session.job}\nDomain: ${ctx.session.domain}\nEmail: ${ctx.session.email}\nJoin Community: ${ctx.session.community}`
  );
});
bot.launch();
