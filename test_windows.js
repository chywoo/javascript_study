/**
 * Created by chywoo.park on 15. 2. 26..
 */

function body_load()
{
    console.log("Start function");

    windows.confirm("Move windows")
    windows.moveBy(10, 10);

    return;
}